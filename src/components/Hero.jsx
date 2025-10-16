import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, EffectFade } from "swiper/modules";

export default function Hero() {
  const slides = [
    { bg: "/images/bg_1.jpg", sub: "Hello! This is Clyde", title: <>Creative <span>UI/UX</span> Designer &amp; Developer</> },
    { bg: "/images/bg_2.jpg", sub: "We Design & Build Brands", title: <>Hi, I am <span>Clyde</span> This is my favorite work.</> },
  ];

  return (
    <section id="home-section" className="hero">
      <Swiper
        modules={[Navigation, Pagination, Autoplay, EffectFade]}
        loop
        effect="fade"
        speed={700}
        // autoplay={{ delay: 4000, disableOnInteraction: false }}
        navigation
        pagination={{ clickable: true }}
        className="home-slider"
      >
        {slides.map((s, idx) => (
          <SwiperSlide key={idx}>
            <div className="slide-bg" style={{ backgroundImage: `url('${s.bg}')` }} />
            {/* <div className="overlay" /> */}
            <div className="overlay-1" />
            <div className="container-fluid px-md-0 slide-content">
              <div className="row d-md-flex no-gutters slider-text align-items-end justify-content-end" data-scrollax-parent="true" style={{ minHeight: "100vh" }}>
                <div className="one-third order-md-last img" />
                <div className="one-forth d-flex align-items-center ftco-animate" data-scrollax=" properties: { translateY: '70%' }" style={{ minHeight: "100vh", paddingLeft: 24, paddingRight: 24 }}>
                  <div className="text">
                    <span className="subheading">{s.sub}</span>
                    <h1 className="mb-4 mt-3">{s.title}</h1>
                    <p>
                      <a href="#" className="btn btn-primary">Hire me</a>{" "}
                      <a href="#" className="btn btn-primary btn-outline-primary">Download CV</a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}