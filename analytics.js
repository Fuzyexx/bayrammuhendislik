(() => {
  if (location.hostname !== 'bayrammuhendislik.com') return;
  window.dataLayer = window.dataLayer || [];
  window.gtag = window.gtag || function () { window.dataLayer.push(arguments); };
  window.gtag('js', new Date());
  window.gtag('config', 'G-R39GW46RB4');
  const tag = document.createElement('script');
  tag.async = true;
  tag.src = 'https://www.googletagmanager.com/gtag/js?id=G-R39GW46RB4';
  document.head.appendChild(tag);
  document.addEventListener('click', event => {
    const link = event.target.closest?.('a[href]');
    if (!link) return;
    const url = new URL(link.href, location.href);
    const method = url.protocol === 'tel:' ? 'phone'
      : url.protocol === 'https:' && ['wa.me', 'api.whatsapp.com'].includes(url.hostname) ? 'whatsapp'
      : url.protocol === 'mailto:' ? 'email' : null;
    if (!method) return;
    const placement = link.classList.contains('floating-wa') ? 'floating'
      : link.closest('.hero-actions') ? 'hero' : link.closest('.cta-band') ? 'cta'
      : link.closest('#iletisim') ? 'contact' : 'other';
    // Contact clicks are intent signals, not completed leads. No contact data is sent.
    window.gtag('event', method + '_click', {
      contact_method: method, page_path: location.pathname,
      cta_location: placement, transport_type: 'beacon'
    });
    // Native navigation remains available even when Analytics is blocked.
  });
})();
