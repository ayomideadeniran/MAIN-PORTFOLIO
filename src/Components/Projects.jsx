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
import Image10 from "../assets/img/7.png";
import Image11 from "../assets/img/FASTDELIV.png";
import aiTechImage from "../assets/img/AI-tech.png";
import predictImage from "../assets/img/predict.png";
import walletValidatorImage from "../assets/img/Ethereum Wallet Validator.png";
import quizImage from "../assets/img/quiz.png";
import bitcoinImage from "../assets/img/Bitcoin.png";
import fileOrganiserImage from "../assets/img/fileorganiser.png";
import cairoImage from "../assets/img/BOOKSTORE.png";
import scrreenImage from "../assets/img/scrreen.png";

function Projects() {
  // Use useInView hook to track visibility
  const [ref1, inView1] = useInView({ threshold: 0.5 });
  const [ref2, inView2] = useInView({ threshold: 0.5 });
  const [ref3, inView3] = useInView({ threshold: 0.5 });
  const [ref4, inView4] = useInView({ threshold: 0.5 });
  const [ref5, inView5] = useInView({ threshold: 0.5 });
  const [ref6, inView6] = useInView({ threshold: 0.5 });
  const [ref7, inView7] = useInView({ threshold: 0.5 });
  const [ref8, inView8] = useInView({ threshold: 0.5 });
  const [ref9, inView9] = useInView({ threshold: 0.5 });
  const [ref10, inView10] = useInView({ threshold: 0.5 });
  const [ref11, inView11] = useInView({ threshold: 0.5 });
  const [ref12, inView12] = useInView({ threshold: 0.5 });
  const [ref13, inView13] = useInView({ threshold: 0.5 });
  const [ref14, inView14] = useInView({ threshold: 0.5 });
  const [ref15, inView15] = useInView({ threshold: 0.5 });
  const [ref16, inView16] = useInView({ threshold: 0.5 });
  const [ref17, inView17] = useInView({ threshold: 0.5 });
  const [ref18, inView18] = useInView({ threshold: 0.5 });
  const [ref19, inView19] = useInView({ threshold: 0.5 });

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
    opacity: inView7 ? 1 : 0,
    transform: inView7 ? "translateY(0)" : "translateY(50px)",
    config: { mass: 1, tension: 120, friction: 14 }
  });

  const animationProps8 = useSpring({
    opacity: inView8 ? 1 : 0,
    transform: inView8 ? "translateY(0)" : "translateY(50px)",
    config: { mass: 1, tension: 120, friction: 14 }
  });

  const animationProps9 = useSpring({
    opacity: inView9 ? 1 : 0,
    transform: inView9 ? "translateY(0)" : "translateY(50px)",
    config: { mass: 1, tension: 120, friction: 14 }
  });

  const animationProps10 = useSpring({
    opacity: inView10 ? 1 : 0,
    transform: inView10 ? "translateY(0)" : "translateY(50px)",
    config: { mass: 1, tension: 120, friction: 14 }
  });

  const animationProps11 = useSpring({
    opacity: inView11 ? 1 : 0,
    transform: inView11 ? "translateY(0)" : "translateY(50px)",
    config: { mass: 1, tension: 120, friction: 14 }
  });

  const animationProps12 = useSpring({
    opacity: inView12 ? 1 : 0,
    transform: inView12 ? "translateY(0)" : "translateY(50px)",
    config: { mass: 1, tension: 120, friction: 14 }
  });

  const animationProps13 = useSpring({
    opacity: inView13 ? 1 : 0,
    transform: inView13 ? "translateY(0)" : "translateY(50px)",
    config: { mass: 1, tension: 120, friction: 14 }
  });

  const animationProps14 = useSpring({
    opacity: inView14 ? 1 : 0,
    transform: inView14 ? "translateY(0)" : "translateY(50px)",
    config: { mass: 1, tension: 120, friction: 14 }
  });

  const animationProps15 = useSpring({
    opacity: inView15 ? 1 : 0,
    transform: inView15 ? "translateY(0)" : "translateY(50px)",
    config: { mass: 1, tension: 120, friction: 14 }
  });

  const animationProps16 = useSpring({
    opacity: inView16 ? 1 : 0,
    transform: inView16 ? "translateY(0)" : "translateY(50px)",
    config: { mass: 1, tension: 120, friction: 14 }
  });

  const animationProps17 = useSpring({
    opacity: inView17 ? 1 : 0,
    transform: inView17 ? "translateY(0)" : "translateY(50px)",
    config: { mass: 1, tension: 120, friction: 14 }
  });

  const animationProps18 = useSpring({
    opacity: inView18 ? 1 : 0,
    transform: inView18 ? "translateY(0)" : "translateY(50px)",
    config: { mass: 1, tension: 120, friction: 14 }
  });

  const animationProps19 = useSpring({
    opacity: inView19 ? 1 : 0,
    transform: inView19 ? "translateY(0)" : "translateY(50px)",
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

            {/* New project added at top: AI Tech Navigator */}
            <animated.article
              ref={ref19}
              style={animationProps19}
              className="projects__card"
            >
              <img src={aiTechImage} alt="AI Tech Navigator" className="projects__img" />
              <div className="projects__modal">
                <span className="projects__subtitle">AI / Tools</span>
                <h2 className="projects__title">AI Tech Navigator</h2>
                <a
                  href="https://ai-tech-navigator.vercel.app/"
                  className="projects__button"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Live App <i className="ri-external-link-line" />
                </a>
                <a
                  href="https://github.com/ayomideadeniran/AI-Tech-Navigator.git"
                  className="projects__button"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub Repo <i className="ri-external-link-line" />
                </a>
              </div>
            </animated.article>

            {/* BitStarkNet (Resolve Hackathon) */}
            <animated.article
              ref={ref18}
              style={animationProps18}
              className="projects__card"
            >
              <img src="https://github.com/ayomideadeniran/BitStakeNet---Resolve-Hackathon/raw/main/assets/banner.png" alt="BitStarkNet banner" className="projects__img" />
              <div className="projects__modal">
                <span className="projects__subtitle">StarkNet / Web3</span>
                <h2 className="projects__title">BitStarkNet — Resolve Hackathon</h2>
                <a
                  href="https://github.com/ayomideadeniran/BitStakeNet---Resolve-Hackathon.git"
                  className="projects__button"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub Repo <i className="ri-external-link-line" />
                </a>
              </div>
            </animated.article>

            {/* Moved projects to top in requested order */}
            <animated.article
              ref={ref16}
              style={animationProps16}
              className="projects__card"
            >
              <img src={scrreenImage} alt="Educational AI Agent" className="projects__img" />
              <div className="projects__modal">
                <span className="projects__subtitle">Python / AI / Education</span>
                <h2 className="projects__title">🎓EDUCATIONAL AI AGENT SYSTEM</h2>
                <a
                  href="https://github.com/ayomideadeniran/edu-agent-platform"
                  className="projects__button"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub Repo <i className="ri-external-link-line" />
                </a>
              </div>
            </animated.article>

            <animated.article
              ref={ref14}
              style={animationProps14}
              className="projects__card"
            >
              <img src={fileOrganiserImage} alt="project image" className="projects__img" />
              <div className="projects__modal">
                <span className="projects__subtitle">Rust</span>
                <h2 className="projects__title">File Organizer with Rust</h2>
                <a href="https://github.com/ayomideadeniran/File-Organizer-with-Rust" className="projects__button" target="_blank" rel="noopener noreferrer"> <i className="ri-external-link-line" />Github Repo</a>
              </div>
            </animated.article>

            <animated.article
              ref={ref13}
              style={animationProps13}
              className="projects__card"
            >
              <img src={bitcoinImage} alt="project image" className="projects__img" />
              <div className="projects__modal">
                <span className="projects__subtitle">Web3/Blockchain</span>
                <h2 className="projects__title">BITCOIN OFFLINE</h2>
                <a
                  href="https://www.canva.com/design/DAGnrxyzEUQ/asYued1m0NioXpOFca5unw/view?utm_content=DAGnrxyzEUQ&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=hee236b2a2f"
                  className="projects__button"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                Canva Live Link<i className="ri-external-link-line" />
                </a>
                <a href="https://github.com/ayomideadeniran/BITCOIN-OFFLINE-" className="projects__button" target="_blank" rel="noopener noreferrer"> <i className="ri-external-link-line" />Github Repo</a>
              </div>
            </animated.article>

            <animated.article
              ref={ref11}
              style={animationProps11}
              className="projects__card"
            >
              <img src={walletValidatorImage} alt="project image" className="projects__img" />
              <div className="projects__modal">
                <span className="projects__subtitle">Web3/Blockchain</span>
                <h2 className="projects__title">Ethereum Wallet Validator</h2>
                <a
                  href="https://ethereum-wallet-validator.vercel.app/"
                  className="projects__button"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                 Live App<i className="ri-external-link-line" />
                </a>
                <a href="https://github.com/ayomideadeniran/Ethereum-Wallet-Validator" className="projects__button" target="_blank" rel="noopener noreferrer"> <i className="ri-external-link-line" />Github Repo</a>
              </div>
            </animated.article>

            <animated.article
              ref={ref10}
              style={animationProps10}
              className="projects__card"
            >
              <img src={predictImage} alt="project image" className="projects__img" />
              <div className="projects__modal">
                <span className="projects__subtitle">Cairo-Smart Contract/Web3/Blockchain</span>
                <h2 className="projects__title">Predict Tomorrow's Economy</h2>
                <a
                  href="https://predict-tomorrow-s-economy.vercel.app/"
                  className="projects__button"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                 Live App<i className="ri-external-link-line" />
                </a>
                <a href="https://github.com/ayomideadeniran/Predict-Tomorrow-s-Economy" className="projects__button" target="_blank" rel="noopener noreferrer"> <i className="ri-external-link-line" />Frontend Repo</a>
                <a href="https://github.com/ayomideadeniran/Predict-Tomorrow-s-Economy-Contract" className="projects__button" target="_blank" rel="noopener noreferrer"> <i className="ri-external-link-line" />Smart Contract Repo</a>
              </div>
            </animated.article>

            {/* Remaining projects (original order) */}
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
                <span className="projects__subtitle">Web3/Blockchain</span>
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

            {/* <animated.article
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
            </animated.article> */}

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
                  File Upload project {" "}
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
                <a style={{ textDecoration: "none", textAlign: "center" }} href="https://github.com/ayomideadeniran/FULL-BACKEND-PROJECT.git" className="projects__button" target="_blank" rel="noopener noreferrer">
                  gitHub repo of Profile-image upload and Fetch, Forgot-password, Registration, Login   <i className="ri-external-link-line" />
                </a>
              </div>
            </animated.article>

            {/* <animated.article
              ref={ref8}
              style={animationProps8}
              className="projects__card"
            >
              <img src={Image10} alt="project image" className="projects__img" />
              <div className="projects__modal">
                <span className="projects__subtitle">Hackerthon Project</span>
                <h2 className="projects__title">Ecomerce Website</h2>
                <a
                  href="https://ecommerce-app-drab-three.vercel.app/"
                  className="projects__button"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                 MY AFRICAS TALKING PROJECT<i className="ri-external-link-line" />
                </a>
                <a href="https://github.com/ayomideadeniran/Ecommerce-APP"
                target="_blank"
                rel="noopener noreferrer"
                className="projects__button"> <i className="ri-external-link-line" />GITHUB Link</a>
              </div>
            </animated.article> */}

            <animated.article
              ref={ref9}
              style={animationProps9}
              className="projects__card"
            >
              <img src={Image11} alt="project image" className="projects__img" />
              <div className="projects__modal">
                <span className="projects__subtitle">ZION HACKTHON PITCH</span>
                <h2 className="projects__title">FASTDELIV Website Ideal</h2>
                <a
                  href="https://www.canva.com/design/DAGhCdVKiWA/bGSqfsCaKD6rv9WGaxYDEg/view?utm_content=DAGhCdVKiWA&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h2a586edce6"
                  className="projects__button"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                 MY ZION HACKTHON PITCH IDEAL<i className="ri-external-link-line" />
                </a>
                <a href="https://drive.google.com/drive/folders/1-u00G6FENr-kFAm-tvo--AvE0_W5EImA"
                target="_blank"
                rel="noopener noreferrer"
                className="projects__button"> <i className="ri-external-link-line" />GITHUB Link</a>
              </div>
            </animated.article>

            {/* <animated.article
              ref={ref12}
              style={animationProps12}
              className="projects__card"
            >
              <img src={quizImage} alt="project image" className="projects__img" />
              <div className="projects__modal">
                <span className="projects__subtitle">Web App</span>
                <h2 className="projects__title">Quiz App</h2>
                <a
                  href="https://quiz-app-nine-tan.vercel.app/"
                  className="projects__button"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                 Live App<i className="ri-external-link-line" />
                </a>
                <a href="https://github.com/ayomideadeniran/Quiz-App" className="projects__button" target="_blank" rel="noopener noreferrer"> <i className="ri-external-link-line" />Github Repo</a>
              </div>
            </animated.article> */}

            {/* Micropay: micropayment platform on StarkNet */}
            <animated.article
              ref={ref17}
              style={animationProps17}
              className="projects__card"
            >
              <img src={Image3} alt="Micropay project" className="projects__img" />
              <div className="projects__modal">
                <span className="projects__subtitle">StarkNet / Web3</span>
                <h2 className="projects__title">Micropay Micropayments</h2>
                <a
                  href="https://github.com/ayomideadeniran/micropay"
                  className="projects__button"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub Repo <i className="ri-external-link-line" />
                </a>
              </div>
            </animated.article>

            {/* <animated.article
              ref={ref15}
              style={animationProps15}
              className="projects__card"
            >
              <img src={cairoImage} alt="project image" className="projects__img" />
              <div className="projects__modal">
                <span className="projects__subtitle">Web3/Blockchain</span>
                <h2 className="projects__title">Cairo Project</h2>
                <a href="#" className="projects__button" target="_blank" rel="noopener noreferrer"> <i className="ri-external-link-line" />Live App</a>
                <a href="#" className="projects__button" target="_blank" rel="noopener noreferrer"> <i className="ri-external-link-line" />Github Repo</a>
              </div>
            </animated.article> */}

          </div>
      </section>
    </div>
  );
}

export default Projects;
