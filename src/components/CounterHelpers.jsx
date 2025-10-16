import { useEffect, useRef, useState } from "react";

export function useRevealOnScroll() {
  useEffect(() => {
    const els = Array.from(document.querySelectorAll(".ftco-animate"));
    if (!els.length) return;

    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add("in-view");
          io.unobserve(e.target);
        }
      });
    }, { threshold: 0.15 });

    els.forEach((el) => io.observe(el));
    // hide loader after mount
    const t = setTimeout(() => {
      const el = document.getElementById("ftco-loader");
      if (el) el.classList.remove("show");
    }, 300);

    return () => { io.disconnect(); clearTimeout(t); };
  }, []);
}

export function CountUp({ to = 0, duration = 1200, className = "" }) {
  const [val, setVal] = useState(0);
  const startedRef = useRef(false);
  const elRef = useRef(null);

  useEffect(() => {
    const io = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting || startedRef.current) return;
      startedRef.current = true;
      const start = performance.now();
      const step = (now) => {
        const t = Math.min(1, (now - start) / duration);
        const eased = 1 - Math.pow(1 - t, 3);
        setVal(Math.round(to * eased));
        if (t < 1) requestAnimationFrame(step);
      };
      requestAnimationFrame(step);
    }, { threshold: 0.5 });
    if (elRef.current) io.observe(elRef.current);
    return () => io.disconnect();
  }, [to, duration]);

  return <strong ref={elRef} className={className}>{val.toLocaleString()}</strong>;
}