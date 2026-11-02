import fs from 'node:fs';
import path from 'node:path';
import vm from 'node:vm';
import assert from 'node:assert/strict';
const root=process.cwd(), base='https://bayrammuhendislik.com/';
const slugs=['plc-programlama','makine-revizyonu','endustriyel-ariza-servisi','hmi-scada','pano-tasarimi','makina-demontaj-montaj'];
const files=['index.html',...slugs.map(s=>s+'/index.html')];
let links=0;
for(const file of files){
 const h=fs.readFileSync(file,'utf8');
 assert.equal((h.match(/<h1[ >]/g)||[]).length,1,file+' H1');
 assert.match(h,/<html lang="tr"/); assert.match(h,/<meta name="description" content="[^"]+"/);
 const url=base+(file==='index.html'?'':file.replace('index.html',''));
 assert.ok(h.includes('rel="canonical" href="'+url+'"'));
 assert.ok(!h.includes('Isparta')); assert.ok(!h.includes('googletagmanager.com'));
 assert.equal((h.match(/src="\/analytics.js"/g)||[]).length,1);
 for(const m of h.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)) JSON.parse(m[1]);
 for(const m of h.matchAll(/(?:href|src)="([^"]+)"/g)){
  const u=new URL(m[1],url); if(u.origin!==new URL(base).origin)continue;
  let target=path.join(root,u.pathname);if(u.pathname.endsWith('/'))target=path.join(target,'index.html');
  assert.ok(fs.existsSync(target),file+' missing '+m[1]);
  if(u.hash){const dest=fs.readFileSync(target,'utf8');assert.ok(dest.includes('id="'+u.hash.slice(1)+'"'),file+' missing anchor '+m[1]);}links++;
 }
 assert.match(h,/Temsili|temsili/);
}
const sitemap=fs.readFileSync('sitemap.xml','utf8');
assert.equal((sitemap.match(/<loc>/g)||[]).length,7);
for(const s of ['',...slugs.map(s=>s+'/')])assert.ok(sitemap.includes('<loc>'+base+s+'</loc>'));
const code=fs.readFileSync('analytics.js','utf8');
function setup(host){const handlers={},appended=[];const context={location:{hostname:host,pathname:'/plc-programlama/',href:'https://'+host+'/plc-programlama/'},URL,window:{},document:{createElement:()=>({}),head:{appendChild:s=>appended.push(s)},addEventListener:(n,f)=>handlers[n]=f}};vm.runInNewContext(code,context);return {context,handlers,appended};}
const local=setup('localhost');assert.equal(local.appended.length,0);assert.equal(local.handlers.click,undefined);
const prod=setup('bayrammuhendislik.com');assert.equal(prod.appended.length,1);
for(const [href,event] of [['tel:+905061492471','phone_click'],['https://wa.me/905061492471?text=private','whatsapp_click'],['mailto:info@bayrammuhendislik.com','email_click']]){
 const link={href,classList:{contains:()=>false},closest:s=>s==='.hero-actions'?{}:null};
 prod.handlers.click({target:{closest:()=>link}});
 const item=[...prod.context.window.dataLayer.at(-1)];assert.equal(item[1],event);assert.equal(item[2].cta_location,'hero');assert.ok(!JSON.stringify(item).includes('private'));assert.ok(!JSON.stringify(item).includes('905061492471'));
}
const count=prod.context.window.dataLayer.length;
prod.handlers.click({target:{closest:()=>({href:'https://example.com/',classList:{contains:()=>false},closest:()=>null})}});
assert.equal(prod.context.window.dataLayer.length,count);
console.log(`PASS: 7 pages; ${links} internal URLs/anchors; metadata, JSON-LD, sitemap; production-only analytics and three contact event types.`);
