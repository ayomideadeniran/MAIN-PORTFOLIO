import React from "react";
import { useTrail, useSpring, animated } from "react-spring";
import { useInView } from "react-intersection-observer";

function Skill() {
  // useInView hook to track visibility of the skill section
  const [ref, inView] = useInView({ threshold: 0.5 });

  // Define animations for each skill item using useTrail
  const skillAnimationProps = useTrail(9, {
    from: { opacity: 0, transform: "translateX(-20px)" },
    to: {
      opacity: inView ? 1 : 0,
      transform: inView ? "translateX(0)" : "translateX(-20px)",
    },
    config: { mass: 3, tension: 200, friction: 20 }, // Adjusted for slower animation
  });

  // Animation props for the whole section using useSpring
  const sectionAnimationProps = useSpring({
    opacity: inView ? 1 : 0,
    transform: inView ? "translateY(0)" : "translateY(50px)",
    config: { mass: 1, tension: 120, friction: 20 }, // Adjusted for slower animation
  });

  // Array of skills
  const skills = [
    "C programming",
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
  ];

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
            <a target="_blank" href="https://drive.google.com/file/d/1UfpdYX_xGnnrUp3GMjdyL9z5o18j6Bj2/view?usp=sharing" className="button" style={{ marginTop: "10px" }}>
              MY RESUME
            </a>

          </div>

          <div className="skills__content">
            <ol className="skills__group">
              {skills.slice(0, 5).map((skill, index) => (
                <animated.li
                  key={index}
                  style={skillAnimationProps[index]}
                  className="skills__item"
                >
                  {skill}
                </animated.li>
              ))}
            </ol>
            <ol className="skills__group" start="5">
              {skills.slice(5).map((skill, index) => (
                <animated.li
                  key={index + 5}
                  style={skillAnimationProps[index + 5]}
                  className="skills__item"
                >
                  {skill}
                </animated.li>
              ))}
            </ol>
          </div>
        </animated.div>
      </section>
    </div>
  );
}

export default Skill;
