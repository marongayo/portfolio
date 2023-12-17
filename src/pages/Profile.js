import React from "react";
import "./assets/css/main.css";

const Profile = () => {
  return (
    <div>
      <section id="hero">
        <header>
          <div className="nav-toggle">
            <p>Menu</p>
            <span></span>
          </div>
          <ul className="nav">
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#three-slide">Work</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </header>
        <div className="wrapper">
          <div className="welcome">
            <h1>
              <strong>Mar Ongayo</strong> Portfolio
            </h1>

            <figure className="quote">
              <blockquote>
                Life does not always turn out to be as we want or expect it to
                be, once in a while it might give you a full blow from which you
                think you might not recover but if you still have the breath in
                you, always reel back and continue to fight.
              </blockquote>
              <figcaption>
                &mdash;
                <strong> Margearet A. Ogolla,</strong> in
                <cite>"The River and The Source"</cite>
              </figcaption>
            </figure>
          </div>
        </div>
      </section>

      <section id="about">
        <div className="wrapper">
          <div className="blurb">
            <h2>
              My name is <strong>Mar Ongayo</strong>
            </h2>
            <p>
              I am a results-driven individual, equipped me with a solid
              foundation in analytical thinking and problem-solving. Driven by a
              fervor for continuous learning, I have honed my skills as a
              self-taught developer. My journey has led me to explore the
              dynamic world of programming, where I have cultivated expertise in
              SQL, Python and SciPy, C and C++, Java among other technologies.
              <br />
              <br />I am currently seeking new opportunities in the field, eager
              to contribute my analytical and programming skills to innovative
              projects. Whether it's crafting efficient algorithms, developing
              data-driven solutions, or collaborating with multidisciplinary
              teams, I am ready to leverage my skills to make a positive impact.
              Thank you for visiting my portfolio. I am excited about the
              prospect of contributing to exciting projects and collaborations.
              Let's build something great together!
            </p>
            <div className="social">
              <a href="https://github.com/marongayo">
                <i className="fa-brands fa-github"></i>
              </a>
              <a href="https://www.instagram.com/okwachkich/">
                <i className="icon-instagram"></i>
              </a>
              <link
                rel="stylesheet"
                href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/css/all.min.css"
              />
              <a href="https://twitter.com/okwach_kich">
                <i className="fa-brands fa-x-twitter"></i>
              </a>
              <a href="https://www.linkedin.com/in/mar-ongayo-105ba5245">
                <i className="fab fa-linkedin"></i>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Profile;
