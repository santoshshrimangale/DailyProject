import React from 'react'
import "./About.css"
import about from "../../images/about.jpeg"

function About() {
  return (
    <section className="about">
      <div className="container">
        <div className="section-title">
          <h2>About</h2>
        </div>
        <div className="about-content grid">
          <div className="about-img">
            <img src={about} alt="" />
          </div>
          <div className="about-text">
            <h2 className="about-title fs-26 ls-1">About BookHub</h2>
            <p className="fs-17">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam iste quasi reprehenderit nulla officiis nam aperiam aspernatur porro esse omnis nihil sapiente delectus, culpa dolor eos recusandae! Et, iusto asperiores?</p>
<p className="fs-17">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui, vitae in totam voluptatibus minus ratione eum. Quidem dolorem vero officia nemo in perspiciatis ex repellat necessitatibus, ullam, eveniet maiores reprehenderit.</p>

          </div>
        </div>
      </div>
    </section>
  )
}

export default About;