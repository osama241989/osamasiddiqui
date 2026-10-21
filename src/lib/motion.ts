// Page motion inspired by premium agency sites: smooth scrolling, staggered
// reveals, image unveils, parallax and a scroll progress bar. Browser-only:
// call from useEffect. Returns a cleanup function.
export function initMotion(): () => void {
  if (typeof window === "undefined") return () => {};
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return () => {};
  let cleanup = () => {};
  let cancelled = false;

  void (async () => {
    const [{ gsap }, { ScrollTrigger }, { default: Lenis }] = await Promise.all([
      import("gsap"),
      import("gsap/ScrollTrigger"),
      import("lenis"),
    ]);
    if (cancelled) return;
    gsap.registerPlugin(ScrollTrigger);

    const lenis = new Lenis({ duration: 1.15, smoothWheel: true });
    lenis.on("scroll", ScrollTrigger.update);
    const tick = (time: number) => lenis.raf(time * 1000);
    gsap.ticker.add(tick);
    gsap.ticker.lagSmoothing(0);

    const onAnchor = (e: MouseEvent) => {
      const a = (e.target as HTMLElement).closest<HTMLAnchorElement>('a[href^="#"], a[href^="/#"]');
      if (!a) return;
      const id = a.getAttribute("href")!.replace(/^\/?/, "");
      const el = id.length > 1 ? document.querySelector(id) : null;
      if (!el) return;
      e.preventDefault();
      lenis.scrollTo(el as HTMLElement, { offset: -80 });
    };
    document.addEventListener("click", onAnchor);

    const bar = document.createElement("div");
    bar.className = "scroll-progress";
    document.body.appendChild(bar);

    const ctx = gsap.context(() => {
      gsap.to(bar, { scaleX: 1, ease: "none", scrollTrigger: { start: 0, end: "max", scrub: 0.3 } });

      const hero = document.querySelector("#top");
      if (hero) {
        const tl = gsap.timeline({ defaults: { ease: "expo.out" } });
        tl.from(hero.querySelectorAll(".hero-copy > *"), { y: 60, opacity: 0, duration: 1.3, stagger: 0.1 });
        const img = hero.querySelector("img");
        if (img) {
          tl.from(img, { clipPath: "inset(100% 0% 0% 0%)", scale: 1.25, duration: 1.6, ease: "expo.inOut" }, 0.1);
          gsap.to(img, { yPercent: 8, ease: "none", scrollTrigger: { trigger: hero, start: "top top", end: "bottom top", scrub: true } });
        }
      }

      document.querySelectorAll<HTMLElement>("section:not(#top)").forEach((section) => {
        const heads = section.querySelectorAll("h2");
        if (heads.length) {
          gsap.from(heads, { y: 70, opacity: 0, skewY: 3, duration: 1.2, ease: "expo.out", scrollTrigger: { trigger: section, start: "top 85%" } });
        }
        const items = section.querySelectorAll<HTMLElement>("article, .grid > div, .grid > a, li");
        if (items.length) {
          ScrollTrigger.batch(Array.from(items), {
            start: "top 92%",
            once: true,
            onEnter: (batch) => gsap.fromTo(batch, { y: 50, opacity: 0 }, { y: 0, opacity: 1, duration: 1, ease: "expo.out", stagger: 0.08, overwrite: true }),
          });
          gsap.set(items, { opacity: 0 });
        }
        section.querySelectorAll<HTMLImageElement>("article img").forEach((img) => {
          gsap.fromTo(img, { scale: 1.18 }, { scale: 1, ease: "none", scrollTrigger: { trigger: img, start: "top bottom", end: "bottom top", scrub: true } });
        });
      });
    });

    requestAnimationFrame(() => ScrollTrigger.refresh());

    cleanup = () => {
      ctx.revert();
      gsap.ticker.remove(tick);
      lenis.destroy();
      document.removeEventListener("click", onAnchor);
      bar.remove();
    };
  })();

  return () => {
    cancelled = true;
    cleanup();
  };
}
