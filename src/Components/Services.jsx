import React from "react";
import { useSpring, animated } from "react-spring";
import { useInView } from "react-intersection-observer";

function Services() {
  // useInView hook to track visibility of the services section
  const [ref, inView] = useInView({ threshold: 0.5 });

  // Define animations for each service card using useSpring
  const cardAnimationProps = useSpring({
    opacity: inView ? 1 : 0,
    transform: inView ? "translateY(0)" : "translateY(-100px)",
    config: { duration: 800, easing: (t) => t * (2 - t) }, // ease-in-out function
  });

  return (
    <div>
      {/* <!--==================== SERVICES ====================--> */}
      <section className="services section" id="services" ref={ref}>
        <animated.div
          style={cardAnimationProps}
          className="services__container container grid"
        >
          <animated.article className="services__card">
            <i className="ri-layout-3-line services__icon"></i>
            <h2 className="services__title">Full Stack Web Development</h2>
            <p className="services__description">
              Full-Stack Web Developer | Building custom web pages with
              cutting-edge tech & libraries, delivering robust, scalable &
              maintainable solutions. Expertise spans entire web dev spectrum,
              ensuring seamless user experiences.
            </p>
          </animated.article>

          <animated.article className="services__card">
            <i className="ri-pen-nib-line services__icon"></i>
            <h2 className="services__title">Graphic Designer</h2>
            <p className="services__description">
              I collaborate with clients to craft tailored visual solutions,
              including banner designs, posters, digital designs, and more.
            </p>
          </animated.article>

          <animated.article className="services__card">
            <i className="ri-pantone-line services__icon"></i>
            <h2 className="services__title">MERN Developer</h2>
            <p className="services__description">
              MERN Developer | Building robust web apps with JavaScript
              expertise, designing & developing scalable, efficient & modern
              solutions. Proficient in MongoDB, Express, React & Node.js,
              ensuring seamless integration & optimal performance.
            </p>
          </animated.article>
        </animated.div>
      </section>
    </div>
  );
}

export default Services;
