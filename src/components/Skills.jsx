import { CountUp } from "./CounterHelpers.jsx";

export default function Skills() {
  return (
    <section className="ftco-section bg-light" id="skills-section">
      <div className="container">
        <div className="row justify-content-center pb-5">
          <div className="col-md-12 heading-section text-center ftco-animate">
            <span className="subheading">Skills</span>
            <h2 className="mb-4">My Skills</h2>
            <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia</p>
          </div>
        </div>
        <div className="row progress-circle mb-5">
          {[
            { name: "CSS", val: 95 },
            { name: "HTML", val: 98 },
            { name: "jQuery", val: 68 },
            { name: "Photoshop", val: 92 },
            { name: "WordPress", val: 83 },
            { name: "SEO", val: 95 },
          ].map((s, i) => (
            <div className="col-lg-4 mb-4" key={i}>
              <div className="bg-white rounded-lg shadow p-4 ftco-animate">
                <h2 className="h5 font-weight-bold text-center mb-4">{s.name}</h2>
                <div className="cprogress mx-auto" data-value={s.val} style={{ ['--val']: s.val }}>
                  <div className="progress-value w-100 h-100 rounded-circle d-flex align-items-center justify-content-center">
                    <div className="h2 font-weight-bold">{s.val}<sup className="small">%</sup></div>
                  </div>
                </div>
                <div className="row text-center mt-4">
                  <div className="col-6 border-right">
                    <div className="h4 font-weight-bold mb-0"><CountUp to={28} duration={900} />%</div><span className="small text-gray">Last week</span>
                  </div>
                  <div className="col-6">
                    <div className="h4 font-weight-bold mb-0"><CountUp to={60} duration={900} />%</div><span className="small text-gray">Last month</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}