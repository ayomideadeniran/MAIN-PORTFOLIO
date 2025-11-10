import React from "react";
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


const colors = [
  "#FF6B6B", // RUST – strong red/orange
  "#4ECDC4", // Python – teal / standout
  "#FFD93D", // Nodejs – yellow / bright
  "#1E90FF", // TypeScript – blue / techy
  "#FF7F50", // Reactjs – coral / vibrant
  "#8A2BE2", // Nextjs – purple
  "#20B2AA", // Expressjs – light teal
  "#FF69B4", // MongoDB – pinkish / standout
  "#FF6347", // C – tomato
  "#00CED1", // Cairo – cyan
  "#ADFF2F", // Solidity – lime green
  "#FF4500", // Web3.js – orange red
  "#4682B4", // Javascript – steel blue
  "#DA70D6", // Tailwind CSS – orchid
  "#F0E68C", // HTML – khaki
  "#87CEFA", // CSS – light sky blue
  "#FFA500", // Bootstrap – orange
  "#6A5ACD", // Git & Github – slate blue
  "#FFB6C1", // Photoshop – light pink
  "#20B2AA", // Canva – teal (repeat or slightly different shade)
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
              href="https://www.canva.com/design/DAG3i1_cors/YpNWi9GLkGnEEtQpYYBxlg/view?utm_content=DAG3i1_cors&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=hc010ea2019"
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