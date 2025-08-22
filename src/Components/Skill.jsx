import React from "react";
import { useTrail, useSpring, animated } from "react-spring";
import { useInView } from "react-intersection-observer";

function Skill() {
  // useInView hook to track visibility of the skill section
  const [ref, inView] = useInView({ threshold: 0.2 });

  // Array of skills
  const skills = [
    "C",
    "RUST",
    "Bootstrap",
    "Reactjs",
    "Solidity",
    "Git & Github",
    "Photoshop",
    "Nodejs",
    "Expressjs",
    "MongoDB",
    "Python",
    "Cairo",
    "HTML",
    "Javascript",
    "Canva",
    "Tailwind CSS",
    "CSS",
    "Nextjs",
    "TypeScript",
    "Web3.js",
  ];

  const colors = [
    "#FF5733",
    "#33FF57",
    "#3357FF",
    "#FF33A1",
    "#A133FF",
    "#33FFA1",
    "#FF7F50",
    "#6A5ACD",
    "#2E8B57",
    "#DC143C",
    "#00CED1",
    "#FFD700",
    "#FF4500",
    "#9ACD32",
    "#4682B4",
    "#D2691E",
    "#8A2BE2",
    "#008080",
    "#ADFF2F",
    "#DB7093",
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
      {/* <!--==================== SKILLS ====================--> */}
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
              href="https://drive.google.com/file/d/1UfpdYX_xGnnrUp3GMjdyL9z5o18j6Bj2/view?usp=sharing"
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
                  style={{
                    ...props,
                    backgroundColor: colors[index % colors.length],
                  }}
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
