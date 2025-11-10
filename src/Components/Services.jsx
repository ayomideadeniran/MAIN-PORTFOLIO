import React from "react";
import { useSpring, animated } from "react-spring";
import { useInView } from "react-intersection-observer";

function Services() {
  // useInView hook to track visibility of the services section
  const [ref, inView] = useInView({ threshold: 0.2 });

  // Define animations for each service card using useSpring
  const cardAnimationProps = useSpring({
    opacity: inView ? 1 : 0,
    transform: inView ? "translateY(0)" : "translateY(-100px)",
    config: { duration: 800, easing: t => t * (2 - t) } // ease-in-out function
  });

  return (
    <div>
      {/* */}
      <section className="services section" id="services" ref={ref}>
        <animated.div
          style={cardAnimationProps}
          className="services__container container grid"
        >
          <animated.article className="services__card">
            <i className="ri-layout-3-line services__icon" />
            <h2 className="services__title">Project Ready: Web3 & Financial Systems</h2>
            <p className="services__description">
              **Fully prepared to build the next groundbreaking project.** Focused on delivering robust, secure, and scalable solutions for **hackathons, financial platforms (Web3/Crypto), and complex real-world challenges**. Expertise in taking concepts from ideation to deployment.
            </p>
          </animated.article>

          <animated.article className="services__card">
            <i className="ri-pen-nib-line services__icon" />
            <h2 className="services__title">Full Stack Web Development</h2>
            <p className="services__description">
              Full-Stack Developer | Building custom web pages with **cutting-edge tech & libraries** like NextJS and NestJS, delivering robust, scalable & maintainable solutions. Expertise spans the entire web development spectrum, ensuring seamless user experiences.
            </p>
          </animated.article>

          <animated.article className="services__card">
            <i className="ri-pantone-line services__icon" />
            <h2 className="services__title">MERN & Modern Tech Stack</h2>
            <p className="services__description">
              MERN Developer | Proficient in MongoDB, Express, **React**, & **Node.js**, designing & developing scalable, efficient & modern applications. Focused on leveraging JavaScript/TypeScript to ensure seamless integration and optimal performance across all layers.
            </p>
          </animated.article>

          <animated.article className="services__card">
            <i className="ri-code-box-line services__icon" />
            <h2 className="services__title">AI & Open-Source Contributions</h2>
            <p className="services__description">
              Dedicated to contributing to the global open-source community by developing, maintaining, and improving projects. Committed to leveraging **AI tools** (Python/Rust) to enhance application features, solve problems, and empower others through shared knowledge.
            </p>
          </animated.article>
        </animated.div>
      </section>
    </div>
  );
}

export default Services;