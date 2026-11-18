const nav = document.querySelector('#navigation');
const sections = [...document.querySelectorAll('main > section[id]')].filter(section=>nav.querySelector('a[href="#'+section.id+'"]'));
if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver(entries=>{
    for (const entry of entries) if(entry.isIntersecting){
      nav.querySelectorAll('a').forEach(link=>{
        const active = link.hash === '#'+entry.target.id;
        link.classList.toggle('active',active);
        if(active)link.setAttribute('aria-current','location'); else link.removeAttribute('aria-current');
      });
    }
  }, {rootMargin:'-20% 0px -60% 0px',threshold:0});
  sections.forEach(section=>observer.observe(section));
}
