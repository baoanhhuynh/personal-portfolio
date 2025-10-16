export default function Projects() {
  const works = [1,2,3,4,5,6,7,8];
  return (
    <section className="ftco-section ftco-project" id="projects-section">
      <div className="container-fluid px-md-4">
        <div className="row justify-content-center pb-5">
          <div className="col-md-12 heading-section text-center ftco-animate">
            <span className="subheading">Accomplishments</span>
            <h2 className="mb-4">Our Projects</h2>
            <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia</p>
          </div>
        </div>
        <div className="row">
          {works.map((n) => (
            <div className="col-md-3" key={n}>
              <div className="project img shadow ftco-animate d-flex justify-content-center align-items-center" style={{ backgroundImage: `url('/images/work-${n}.jpg')` }}>
                <div className="overlay"></div>
                <div className="text text-center p-4">
                  <h3><a href="#">Branding &amp; Illustration Design</a></h3>
                  <span>Web Design</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}