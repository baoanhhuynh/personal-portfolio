import { CountUp, useRevealOnScroll } from "./CounterHelpers.jsx";

export default function Counters() {
  // ensures .ftco-animate elements become visible when scrolled into view
  useRevealOnScroll();

  const stats = [
    { icon: "flaticon-suitcase", label: "Project Complete", value: 750 },
    { icon: "flaticon-loyalty",  label: "Happy Clients",    value: 568 },
    { icon: "flaticon-coffee",   label: "Cups of coffee",   value: 478 },
    { icon: "flaticon-calendar", label: "Years experienced",value: 780 },
  ];

  return (
    <section className="ftco-counter img bg-light" id="section-counter">
      <div className="container">
        <div className="row">
          {stats.map((s, i) => (
            <div className="col-md-3 justify-content-center counter-wrap ftco-animate" key={i}>
              <div className="block-18 d-flex">
                <div className="icon d-flex justify-content-center align-items-center">
                  <span className={s.icon}></span>
                </div>
                <div className="text">
                  {/* Replace the hardcoded 0 with CountUp */}
                  <strong className="number"><CountUp to={s.value} duration={1200} /></strong>
                  <span>{s.label}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
