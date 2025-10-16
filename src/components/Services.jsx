export default function Services() {
  const items = [
    { icon: "flaticon-3d-design", title: "Web Design" },
    { icon: "flaticon-app-development", title: "Web Application" },
    { icon: "flaticon-web-programming", title: "Web Development" },
    { icon: "flaticon-branding", title: "Banner Design" },
    { icon: "flaticon-computer", title: "Branding" },
    { icon: "flaticon-vector", title: "Icon Design" },
    { icon: "flaticon-vector", title: "Graphic Design" },
    { icon: "flaticon-zoom", title: "SEO" },
  ];
  return (
    <section className="ftco-section" id="services-section">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-12 heading-section text-center ftco-animate mb-5">
            <span className="subheading">I am grat at</span>
            <h2 className="mb-4">We do awesome services for our clients</h2>
            <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia</p>
          </div>
        </div>
        <div className="row">
          {items.slice(0,4).map((it, i) => (
            <div className="col-md-6 col-lg-3" key={i}>
              <div className="media block-6 services d-block bg-white rounded-lg shadow ftco-animate">
                <div className="icon d-flex align-items-center justify-content-center"><span className={it.icon}></span></div>
                <div className="media-body">
                  <h3 className="heading mb-3">{it.title}</h3>
                  <p>A small river named Duden flows by their place and supplies.</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="row">
          {items.slice(4).map((it, i) => (
            <div className="col-md-6 col-lg-3" key={i}>
              <div className="media block-6 services d-block bg-white rounded-lg shadow ftco-animate">
                <div className="icon shadow d-flex align-items-center justify-content-center"><span className={it.icon}></span></div>
                <div className="media-body">
                  <h3 className="heading mb-3">{it.title}</h3>
                  <p>A small river named Duden flows by their place and supplies.</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}