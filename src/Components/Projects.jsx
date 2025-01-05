import React from "react";
import { useSpring, animated, a } from "react-spring";
import { useInView } from "react-intersection-observer";
import Image2 from "../assets/img/saferoute.png";
import Image3 from "../assets/img/project-img-2.jpg";
import Image4 from "../assets/img/image.png";
import Image5 from "../assets/img/FileUpload.png";
import Image6 from "../assets/img/slidesaferoute.png";
import Image7 from "../assets/img/Text to Speech.png";
import Image8 from "../assets/img/FULLBACKED.png";
import Image9 from "../assets/img/tech.png";

function Projects() {
  // Use useInView hook to track visibility
  const [ref1, inView1] = useInView({ threshold: 0.5 });
  const [ref2, inView2] = useInView({ threshold: 0.5 });
  const [ref3, inView3] = useInView({ threshold: 0.5 });
  const [ref4, inView4] = useInView({ threshold: 0.5 });
  const [ref5, inView5] = useInView({ threshold: 0.5 });
  const [ref6, inView6] = useInView({ threshold: 0.5 });
  const [ref7, inView7] = useInView({ threshold: 0.5 });

  // Define animation properties using useSpring
  const animationProps1 = useSpring({
    opacity: inView1 ? 1 : 0,
    transform: inView1 ? "translateY(0)" : "translateY(50px)",
    config: { mass: 1, tension: 120, friction: 14 }
  });

  const animationProps2 = useSpring({
    opacity: inView2 ? 1 : 0,
    transform: inView2 ? "translateY(0)" : "translateY(50px)",
    config: { mass: 1, tension: 120, friction: 14 }
  });

  const animationProps3 = useSpring({
    opacity: inView3 ? 1 : 0,
    transform: inView3 ? "translateY(0)" : "translateY(50px)",
    config: { mass: 1, tension: 120, friction: 14 }
  });

  const animationProps4 = useSpring({
    opacity: inView4 ? 1 : 0,
    transform: inView4 ? "translateY(0)" : "translateY(50px)",
    config: { mass: 1, tension: 120, friction: 14 }
  });

  const animationProps5 = useSpring({
    opacity: inView5 ? 1 : 0,
    transform: inView5 ? "translateY(0)" : "translateY(50px)",
    config: { mass: 1, tension: 120, friction: 14 }
  });

  const animationProps6 = useSpring({
    opacity: inView6 ? 1 : 0,
    transform: inView6 ? "translateY(0)" : "translateY(50px)",
    config: { mass: 1, tension: 120, friction: 14 }
  });

  const animationProps7 = useSpring({
    opacity: inView6 ? 1 : 0,
    transform: inView6 ? "translateY(0)" : "translateY(50px)",
    config: { mass: 1, tension: 120, friction: 14 }
  });


  return (
    <div>
      {/* <!--==================== PROJECTS ====================--> */}
      <section className="projects section" id="projects">
        <h3 className="section__subtitle">
          My <span>Jobs</span>
        </h3>
        <h2 className="section__title">Recent Projects</h2>
        <div className="projects__container container grid">
          <animated.article
            ref={ref1}
            style={animationProps1}
            className="projects__card"
          >
            <img src={Image2} alt="project image" className="projects__img" />
            <div className="projects__modal">
              <span className="projects__subtitle">Web App</span>
              <h2 className="projects__title">SafeRoute-NG </h2>
              <a
                href="https://saferoute-ng-frontend.onrender.com/"
                className="projects__button"
                target="_blank"
                rel="noopener noreferrer"
              >
               MY AFRICAS TALKING PROJECT<i className="ri-external-link-line" />
              </a>
              <a href="https://github.com/ayomideadeniran/AFRICAS-TALKING-API.git" className="projects__button"> <i className="ri-external-link-line" />GITHUB Link</a>
            </div>
          </animated.article>

          <animated.article
            ref={ref2}
            style={animationProps2}
            className="projects__card"
          >
            <img src={Image9} alt="project image" className="projects__img" />
            <div className="projects__modal">
              <span className="projects__subtitle">Web</span>
              <h2 className="projects__title">ATech Bootcamp</h2>
              <a
                href="https://a-tech-bootcamp.vercel.app/"
                className="projects__button"
                target="_blank"
                rel="noopener noreferrer"
              >
                ATech Bootcamp project<i className="ri-external-link-line" />
              </a>
              <a href="https://github.com/ayomideadeniran/ATech" className="projects__button"> <i className="ri-external-link-line" />GITHUB Link</a>
            </div>
          </animated.article>

          <animated.article
            ref={ref3}
            style={animationProps3}
            className="projects__card"
          >
            <img src={Image4} alt="project image" className="projects__img" />
            <div className="projects__modal">
              <span className="projects__subtitle">Web</span>
              <h2 className="projects__title">Modern website</h2>
              <a
                href="https://learners-den-one.vercel.app/"
                className="projects__button"
                target="_blank"
                rel="noopener noreferrer"
              >
                Learners' Den project<i className="ri-external-link-line" />
              </a>
            </div>
          </animated.article>

          <animated.article
            ref={ref4}
            style={animationProps4}
            className="projects__card"
          >
            <img src={Image5} alt="project image" className="projects__img" />
            <div className="projects__modal">
              <span className="projects__subtitle">Web-App</span>
              <h2 className="projects__title">File Upload</h2>
              <a
                href="https://files-imageupload.onrender.com"
                className="projects__button"
                target="_blank"
                rel="noopener noreferrer"
              >
                File Upload project{" "}
                <i className="ri-external-link-line" />
              </a>
            </div>
          </animated.article>

          <animated.article
            ref={ref5}
            style={animationProps5}
            className="projects__card"
          >
            <img src={Image6} alt="project image" className="projects__img" />
            <div className="projects__modal">
              <span className="projects__subtitle">Graphics Design</span>
              <h2 className="projects__title">SafeRoute-NG Slide Design</h2>
              <a
                href="https://www.canva.com/design/DAGXSR3F91E/5AnHVc62ej0Vgv51JQ1_vw/view?utm_content=DAGXSR3F91E&utm_campaign=designshare&utm_medium=link&utm_source=editor#11"
                className="projects__button"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="ri-external-link-line" />
              </a>
            </div>
          </animated.article>

          <animated.article
            ref={ref6}
            style={animationProps6}
            className="projects__card"
          >
            <img src={Image7} alt="project image" className="projects__img" />
            <div className="projects__modal">
              <span className="projects__subtitle">Mern Stack Project</span>
              <h2 className="projects__title">AUTISM APP</h2>
              <a href="https://autismapp.vercel.app/" className="projects__button" target="_blank" rel="noopener noreferrer">
                FOR STUDENT WITH STUDY DISABILITY <i className="ri-external-link-line" />
              </a>
            </div>
          </animated.article>

          <animated.article
             ref={ref7}
             style={animationProps7}
             className="projects__card"
          >
            <img src={Image8} alt="project image" className="projects__img" />
            <div className="projects__modal">
              <span className="projects__subtitle">Full Stack Project</span>
              <h2 className="projects__title">Github Repo</h2>
              <a href="https://github.com/ayomideadeniran/FULL-BACKEND-PROJECT.git" className="projects__button" target="_blank" rel="noopener noreferrer">
                gitHub repo of Profile-image upload and Fetch, Forgot-password, Registration, Login   <i className="ri-external-link-line" />
              </a>
            </div>
          </animated.article>

        </div>
      </section>
    </div>
  );
}

export default Projects;
