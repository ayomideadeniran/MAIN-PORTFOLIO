
import { useTrail, useSpring, animated } from "react-spring";
import { useInView } from "react-intersection-observer";

function Skill() {
  // useInView hook to track visibility of the skill section
  const [ref, inView] = useInView({ threshold: 0.2 });

  // Array of skills - REARRANGED FOR WEB3 FULL STACK PRIORITY
  const skills = [
    "RUST",
    "Python",
    "Nodejs",
    "Stellar Soroban",
    "TypeScript",
    "Reactjs",
    "Nextjs",
    "Expressjs",
    "MongoDB",
    "C",
    "Cairo",
    "Solidity",
    "Web3.js",
    "Javascript",
    "Tailwind CSS",
    "HTML",
    "CSS",
    "Bootstrap",
    "Git & Github",
    "Photoshop",
    "Canva",
  ];


  // Define animations for each skill item using useTrail
  const trail = useTrail(skills.length, {
    from: { opacity: 0, transform: "translateX(-20px)" },
    to: {
      opacity: inView ? 1 : 0,
      transform: inView ? "translateX(0)" : "translateX(-20px)",
    },
    config: { mass: 1, tension: 200, friction: 20 },
    delay: 200,
  });

  // Animation props for the whole section using useSpring
  const sectionAnimationProps = useSpring({
    opacity: inView ? 1 : 0,
    transform: inView ? "translateY(0)" : "translateY(50px)",
    config: { mass: 1, tension: 120, friction: 20 },
  });

  return (
    <div>
      {/* */}
      <section className="skills section" id="skills" ref={ref}>
        <animated.div
          style={sectionAnimationProps}
          className="skills__container container grid"
        >
          <div className="skills__data">
            <h3 className="section__subtitle">
              Favorite <span>Skills</span>
            </h3>

            <h2 className="section__title">My Skills</h2>

            <p className="skills__description">
              I can develop projects for you, utilizing a wide range of skills,
              including...
            </p>

            <a href="#projects" className="button">
              See Projects
            </a>
            <br />
            <a
              target="_blank"
              href="https://www.canva.com/design/DAG7ydnqfEU/99TJ1YYajC_7RfL3bA73pg/view?utm_content=DAG7ydnqfEU&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h6cfdabf1bf"
              className="button"
              style={{ marginTop: "10px" }}
            >
              MY RESUME
            </a>
          </div>

          <div className="skills__content">
            <div className="skills__grid">
              {trail.map((props, index) => (
                <animated.div
                  key={index}
                  style={props}
                  className="skills__item"
                >
                  {skills[index]}
                </animated.div>
              ))}
            </div>
          </div>
        </animated.div>
      </section>
    </div>
  );
}

export default Skill;