import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

const items = [
  { img: "/images/person_1.jpg", name: "Roger Scott", role: "Marketing Manager" },
  { img: "/images/person_2.jpg", name: "Roger Scott", role: "Marketing Manager" },
  { img: "/images/person_3.jpg", name: "Roger Scott", role: "Marketing Manager" },
  { img: "/images/person_1.jpg", name: "Roger Scott", role: "Marketing Manager" },
  { img: "/images/person_2.jpg", name: "Roger Scott", role: "Marketing Manager" },
];

export default function Testimonials() {
  return (
    <section className="ftco-section testimony-section bg-primary">
      <div className="container">
        <div className="row justify-content-center pb-5">
          <div className="col-md-12 heading-section heading-section-white text-center ftco-animate">
            <span className="subheading">Testimonies</span>
            <h2 className="mb-4">What client says about?</h2>
            <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia</p>
          </div>
        </div>
        <div className="row ftco-animate">
          <div className="col-md-12">
            <Swiper
              modules={[Autoplay, Pagination]}
              autoplay={{ delay: 3000, disableOnInteraction: false }}
              loop
              // slidesPerView={3}
              spaceBetween={30}
              breakpoints={{
                768: { slidesPerView: 2, spaceBetween: 24 },
                992: { slidesPerView: 3, spaceBetween: 30 }, // 3 on desktop
              }}
              pagination={{
                clickable: true,
                renderBullet: (index, className) =>
                  `<button class="owl-dot ${className}" type="button" aria-label="Go to testimonial ${index + 1}">
                     <span></span>
                   </button>`,
              }}
              className="carousel-testimony"
            >
              {items.map((it, i) => (
                <SwiperSlide key={i}>
                  <div className="item">
                    <div className="testimony-wrap py-4">
                      <div className="text">
                        <span className="fa fa-quote-left"></span>
                        <p className="mb-4 pl-5">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                        <div className="d-flex align-items-center">
                          <div className="user-img" style={{ backgroundImage: `url('${it.img}')` }}></div>
                          <div className="pl-3">
                            <p className="name">{it.name}</p>
                            <span className="position">{it.role}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>

            {/* Swiper will populate this, just like Owl */}
            <div className="owl-dots"></div>
          </div>
        </div>
      </div>
    </section>
  );
}