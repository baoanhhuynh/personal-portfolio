import { useEffect } from "react";

export default function useStickyNavbar(navId = "ftco-navbar") {
  useEffect(() => {
    const nav = document.getElementById(navId);
    if (!nav) return;

    const setBodyOffset = () => {
      const h = nav.offsetHeight || 0;
      document.body.style.paddingTop = nav.classList.contains("fixed-top") ? `${h}px` : "0px";
    };

    const onScroll = () => {
      const y = window.scrollY || window.pageYOffset;
      if (y > 50) {
        nav.classList.add("fixed-top", "scrolled", "awake");
      } else {
        nav.classList.remove("fixed-top", "scrolled", "awake");
      }
      setBodyOffset();
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", setBodyOffset);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", setBodyOffset);
      document.body.style.paddingTop = "0px";
    };
  }, [navId]);
}
