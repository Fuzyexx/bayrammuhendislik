# Bayram Mühendislik — çalışma notu, 2 Kasım 2026

## Uygulanan değişiklikler
Ana sayfadaki Isparta bilgileri kaldırıldı; Eskişehir merkez, Bursa/Bilecik/Kütahya talebe göre saha hizmeti olarak işlendi. Beş hizmete ana sayfadan bağlantı eklendi. Altı URL sitemap'e alındı. Hizmetlere BreadcrumbList, ortak işletme kimliği eklendi. Doğrulanmamış şehir merkezi koordinatları, fiyat aralığı ve çalışma saatleri schema'dan kaldırıldı. Mevcut telefon, e-posta ve marka listesi korundu.

Mobil menü kapanırken aria-expanded güncelleniyor; Escape ve dışarı tıklama destekleniyor. JavaScript kapalıyken içerik ve menü görünür. Odak göstergeleri, içerik atlama bağlantısı, hareket azaltma, daha okunur düğme renkleri ve mobil düğme boyutları eklendi.

Mevcut özgün assets/automation-system.svg kullanıldı. Bu çalışma için dışarıdan stok fotoğraf veya üçüncü taraf illüstrasyon alınmadı. Görsel temsili olarak açıklandı; müşteri/proje referansı üretilmedi. Mevcut logo kullanıcı deposundan korunmuştur; logo haklarına ilişkin yeni doğrulama yapılmadı. SVG için mutlak hukuki garanti iddia edilmiyor.

## Arama araştırması: kanıt ile varsayımın ayrımı
Google Ads/Keyword Planner ve Search Console hesap verilerine erişilmedi. Aylık hacim, CPC, organik zorluk veya sıra sayısı verilmedi. Aşağıdakiler 2 Kasım 2026 web arama aracı sonuçlarıdır; konumu sabitlenmiş Google SERP sıralama ölçümü değildir. Sonuç sayısı ve rakip metinleri talep miktarını kanıtlamaz.

| Araştırılan sorgu | Gözlenen kaynak | Bulgu ve sınır |
| --- | --- | --- |
| Eskişehir PLC programlama otomasyon makine revizyonu | https://www.smdteknik.com/sss | Arama özetinde PLC, pano, HMI, SCADA ve revizyon var. Doğrudan sayfa açılışı 502 verdi; yalnız özet kanıtı. |
| Bursa PLC yazılım arıza servisi | https://www.bursaautomation.com.tr/ | Sayfa açılarak doğrulandı: PLC servisi, HMI, eski PLC yenileme, pano revizyonu ayrı hizmetler. Rakibin 7/24 iddiası Bayram'a aktarılmadı. |
| Bilecik Bozüyük PLC programlama otomasyon | https://www.aveaotomasyon.com/bilecik-bozuyuk-otomasyon/ | Arama özetinde Eskişehir merkezden Bilecik/Bozüyük hizmeti var. Doğrudan açılış başarısız; özet kanıtı. |
| Bilecik Kütahya otomasyon pano SCADA | https://kutahyakuzey.com/ | Sayfa açılarak doğrulandı: PLC, SCADA, HMI ve pano hizmetleri. Bilecik ve çevre iller de anılıyor. |

Çıkarım: Beş hizmet sayfası bu hizmet dilini karşılıyor. Eğitim arayanlarla hizmet satın almak isteyenleri ayırmak için teklif kapsamı, ihtiyaç belgeleri ve saha planı açıklanmalı. PLC tamiri elektronik kart onarımı anlamına da gelebilir; sunulduğu doğrulanmadan yeni bir kart tamiri vaadi eklenmedi. Benzer şehir sayfaları çoğaltılmadı.

Ölçülecek adaylar (doğrulanmış müşteri sorguları değildir): PLC programlama, PLC yazılım, PLC arıza servisi, makine revizyonu, PLC modernizasyonu, HMI programlama, SCADA yazılımı, otomasyon panosu, pano revizyonu. Şehir varyasyonları ve marka/model ifadeleri ayrıca doğrulanmalı; şu aşamada hacme dayalı öncelik yok.

Keyword Planner erişimi elde edilirse: dört ili ayrı konumlarda, Türkçe, Google ağı, Kasım 2025–Ekim 2026 dönemiyle dışa aktar. Hacim/aralık, aylık kırılım, reklam rekabeti ve teklif aralıklarını koru; eksik veri sıfır değildir. Google Ads rekabeti organik SEO zorluğu değildir. Google erişim için hesap ve faturalandırma kurulumunun tamamlanmasını belirtiyor: https://support.google.com/google-ads/answer/7337243?hl=tr
Metrik tanımları: https://support.google.com/google-ads/answer/3022575?hl=tr

Hesap kurmadan ilerlemek için Search Console Performans raporundaki sorgu/sayfa verisi kullanılabilir. Önceki sohbetin 94 gösterim/12 tıklama rakamları yeniden doğrulanmadı ve güncel başlangıç değeri kabul edilmedi.

## Ölçüm ve yayın sonrası adımlar
Mevcut G-R39GW46RB4 kimliği korundu. analytics.js yalnız bayrammuhendislik.com üzerinde çalışır. phone_click, whatsapp_click, email_click etkinlikleri contact_method, page_path ve cta_location gönderir. Özel etkinlik parametrelerinde telefon, e-posta, WhatsApp metni gönderilmez. Mevcut GA4 sayfa görüntüleme davranışı korunur. Yerel testler Google'a gönderilmez.

Tıklama tamamlanmış görüşme veya satış değildir. Yayın onayından sonra GA4 Realtime/DebugView'da her düğmenin bir etkinlik ürettiği doğrulanmalı; phone_click ve whatsapp_click önemli etkinlik olarak işaretlenmeli. cta_location özel boyut olarak kaydedilebilir. Hesap erişimi olmadığı için bu yönetim ayarları ve gerçek veri alımı yapılmadı. Reklam engelleyici/bağlantı kesintisinde ölçüm eksilebilir; iletişim bağlantıları çalışmaya devam eder.
GA4 kaynağı: https://developers.google.com/analytics/devguides/collection/ga4/events

Onaylı yayından sonra Search Console'a sitemap.xml gönder; altı URL'yi URL Denetimi ile kontrol et. 28 günlük karşılaştırmalarda markalı/markasız sorguları, hizmet sayfalarını ve gerçek nitelikli talepleri ayrı izle. Telefon/WhatsApp tıklama toplamını müşteri sayısı diye raporlama. Haftalık gelen talep, il, hizmet, teklif ve sonuç kaydı tut. Müşteri izni oluşunca gerçek vaka çalışmaları ekle.
Sitemap lastmod kaynağı: https://developers.google.com/search/blog/2023/06/sitemaps-lastmod-ping

## Testler ve sınırlar
node tests/check.mjs: 6 sayfa, 122 iç URL/dosya/çapa hedefi, tek H1, açıklama/canonical, JSON-LD ayrıştırma, sitemap ve üç iletişim etkinliği geçti. node --check script.js ve analytics.js geçti. git diff --check geçti.
Tarayıcı: ana sayfa masaüstü ve 375px; PLC sayfası 375px ve 320px genişlikte taşma kontrolü geçti. Mobil menü açma/bağlantıyla kapama ve PLC SSS açma doğrulandı. Bütün cihaz kombinasyonları test edilmedi. Google Rich Results doğrulaması, PageSpeed/Core Web Vitals saha verisi ve GA4 canlı alım testi yapılmadı.

Ana dala birleştirme ve yayın yapılmadı. Mevcut SMM/EKİPNET yetkinlik ifadesi bu çalışmada doğrulanmadı; yayın öncesinde işletme tarafından doğrulanmalıdır.
