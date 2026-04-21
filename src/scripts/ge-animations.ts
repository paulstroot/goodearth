if (!(window as any).inEditorMode) {
  const sel = ".st-up,.st-up-d,.st-up-dl,.st-right,.st-right-d,.st-scale,.st-wide";
  const io = new IntersectionObserver(
    (entries) =>
      entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add("is-vis");
          io.unobserve(e.target);
        }
      }),
    { threshold: 0.11 }
  );
  document.querySelectorAll<HTMLElement>(sel).forEach((el) => io.observe(el));
}
