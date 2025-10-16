import { useEffect } from "react";

/**
 * Smoothly scrolls to in-page anchors and compensates for a fixed navbar.
 * Special case: when clicking "#home-section" the navbar is un-stuck immediately.
 *
 * @param {string} navSelector CSS selector for your navbar element
 */
export default function useSmoothAnchorScroll(navSelector = "#ftco-navbar") {
  useEffect(() => {
    const nav = document.querySelector(navSelector);
    const getNavHeight = () => (nav?.offsetHeight || 0);

    function unstickNavbar() {
      nav?.classList.remove("fixed-top", "scrolled", "awake");
      // If you add body padding when sticky, clear it here:
      document.body.style.paddingTop = "0px";
    }

    function handleClick(e) {
      // Only handle in-page anchor links
      const a = e.target.closest('a[href^="#"]');
      if (!a) return;

      const hash = a.getAttribute("href");
      if (!hash || hash === "#") return;

      const target = document.querySelector(hash);
      if (!target) return;

      e.preventDefault();

      // If Home is clicked → unstick immediately, and no offset
      const isHome = hash === "#home-section";
      if (isHome) unstickNavbar();

      const navH = isHome ? 0 : getNavHeight();
      const y = target.getBoundingClientRect().top + window.pageYOffset - navH - 8;

      window.scrollTo({ top: y, behavior: "smooth" });

      // Keep URL hash (without the default jump)
      history.replaceState(null, "", hash);

      // Optional: ensure un-sticky after smooth scroll completes for Home
      if (isHome) {
        setTimeout(() => unstickNavbar(), 400);
      }
    }

    // Attach only to the navbar (safe scope)
    const navEl = document.querySelector(navSelector);
    navEl?.addEventListener("click", handleClick, { passive: false });

    return () => navEl?.removeEventListener("click", handleClick);
  }, [navSelector]);
}
