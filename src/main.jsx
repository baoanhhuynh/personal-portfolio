import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

// Minimal compatibility CSS (kept tiny to avoid overriding theme)
const compat = document.createElement("style");
compat.innerHTML = `
  .ftco-animate{opacity:0;visibility:hidden;transform:translateY(18px);transition:opacity .6s ease,transform .6s ease;}
  .ftco-animate.in-view{opacity:1;visibility:visible;transform:none;}
  .hero .swiper{width:100%;height:100vh;}
  .hero .swiper-slide{height:100%;}
  .hero .slide-content,.hero .container-fluid,.hero .one-forth .text{position:relative;z-index:4;}
  .hero .slide-bg{position:absolute;inset:0;background-size:cover;background-position:center;z-index:0;}
  .hero .overlay{position:absolute;inset:0;background:rgba(0,0,0,.3);z-index:1;pointer-events:none;}
  .hero .overlay-1{position:absolute;inset:0;background:linear-gradient(90deg,rgba(0,0,0,.5),transparent 60%);z-index:2;pointer-events:none;}
  .number{display:block;font-weight:700;font-size:2rem;line-height:1;}
`;
document.head.appendChild(compat);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);