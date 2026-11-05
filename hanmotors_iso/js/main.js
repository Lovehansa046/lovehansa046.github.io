(() => {
  const header = document.getElementById('site-header');
  const menu = document.getElementById('main-nav');
  const toggle = document.getElementById('menu-toggle');
  const links = [...menu.querySelectorAll('a')];
  const closeMenu = () => { menu.classList.remove('open'); toggle.setAttribute('aria-expanded','false'); toggle.setAttribute('aria-label','Открыть меню'); };
  toggle.addEventListener('click', () => {
    const isOpen = menu.classList.toggle('open');
    toggle.setAttribute('aria-expanded', String(isOpen));
    toggle.setAttribute('aria-label', isOpen ? 'Закрыть меню' : 'Открыть меню');
  });
  links.forEach(link => link.addEventListener('click', closeMenu));
  document.addEventListener('keydown', (event) => { if(event.key === 'Escape') closeMenu(); });
  document.addEventListener('click', (event) => { if(!header.contains(event.target)) closeMenu(); });
  const onScroll = () => header.classList.toggle('scrolled', window.scrollY > 20);
  onScroll();
  window.addEventListener('scroll', onScroll, {passive:true});
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => { if(entry.isIntersecting) links.forEach(l => l.classList.toggle('is-active', l.getAttribute('href') === '#' + entry.target.id)); });
  }, {rootMargin:'-32% 0px -58% 0px'});
  ['home','prices','contacts'].forEach(id => observer.observe(document.getElementById(id)));
  document.getElementById('year').textContent = new Date().getFullYear();
})();
