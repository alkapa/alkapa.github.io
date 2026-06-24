// Capa de movimiento compartida — "orquesta silenciosa".
// Sólo corre si el motion está habilitado (no hay reduced-motion); si no, el
// contenido ya es visible y no se toca nada.
const root = document.documentElement;

if (root.classList.contains('js-motion')) {
  // ---- G3 + G4 · Reveals "dirigidos" (entradas escalonadas) ----
  const revealEls = document.querySelectorAll('.reveal, .draw-rule');
  if (revealEls.length) {
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            e.target.classList.add('is-visible');
            io.unobserve(e.target);
          }
        }
      },
      { threshold: 0.12, rootMargin: '0px 0px -8% 0px' },
    );
    for (const el of revealEls) io.observe(el);
  }

  // ---- G5 · Parallax sutil de los glifos monumentales (λ, ∿, ↗) ----
  const parEls = [...document.querySelectorAll<HTMLElement>('[data-parallax]')];
  if (parEls.length) {
    let ticking = false;
    const update = () => {
      const vh = window.innerHeight;
      for (const el of parEls) {
        const speed = parseFloat(el.dataset.parallax || '0');
        const rect = el.getBoundingClientRect();
        const center = rect.top + rect.height / 2 - vh / 2;
        el.style.transform = `translate3d(0, ${(-center * speed).toFixed(1)}px, 0)`;
      }
      ticking = false;
    };
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(update);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll, { passive: true });
    update();
  }

  // ---- G8 · Sección activa en el nav (la "partitura" que se sigue) ----
  const navlinks = [...document.querySelectorAll<HTMLAnchorElement>('[data-navlink]')];
  if (navlinks.length) {
    const map = new Map<string, HTMLAnchorElement>();
    for (const a of navlinks) {
      const id = (a.dataset.navlink || '').replace('#', '');
      if (id) map.set(id, a);
    }
    const sections = [...map.keys()]
      .map((id) => document.getElementById(id))
      .filter((s): s is HTMLElement => Boolean(s));
    const so = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            for (const a of navlinks) a.removeAttribute('data-active');
            const a = map.get((e.target as HTMLElement).id);
            if (a) a.setAttribute('data-active', '');
          }
        }
      },
      { threshold: 0.4 },
    );
    for (const s of sections) so.observe(s);
  }
}
