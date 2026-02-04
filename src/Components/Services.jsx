
import { useTrail, animated } from "react-spring";
import { useInView } from "react-intersection-observer";
import ScrollReveal from "./ScrollReveal";

function Services() {
  // useInView hook to track visibility of the services section
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });

  const services = [
    {
      icon: "ri-layout-3-line",
      title: "Project Ready: Web3 & Financial Systems",
      desc: "**Fully prepared to build the next groundbreaking project.** Focused on delivering robust, secure, and scalable solutions for **hackathons, financial platforms (Web3/Crypto), and complex real-world challenges**. Expertise in taking concepts from ideation to deployment."
    },
    {
      icon: "ri-pen-nib-line",
      title: "Full Stack Web Development",
      desc: "Full-Stack Developer | Building custom web pages with **cutting-edge tech & libraries** like NextJS and NestJS, delivering robust, scalable & maintainable solutions. Expertise spans the entire web development spectrum, ensuring seamless user experiences."
    },
    {
      icon: "ri-pantone-line",
      title: "MERN & Modern Tech Stack",
      desc: "MERN Developer | Proficient in MongoDB, Express, **React**, & **Node.js**, designing & developing scalable, efficient & modern applications. Focused on leveraging JavaScript/TypeScript to ensure seamless integration and optimal performance across all layers."
    },
    {
      icon: "ri-code-box-line",
      title: "AI & Open-Source Contributions",
      desc: "Dedicated to contributing to the global open-source community by developing, maintaining, and improving projects. Committed to leveraging **AI tools** (Python/Rust) to enhance application features, solve problems, and empower others through shared knowledge."
    }
  ];

  // Staggered animation for service cards
  const trail = useTrail(services.length, {
    from: { opacity: 0, transform: "translateY(50px)" },
    to: {
      opacity: inView ? 1 : 0,
      transform: inView ? "translateY(0)" : "translateY(50px)"
    },
    config: { mass: 1, tension: 280, friction: 60 },
    delay: 300
  });

  return (
    <div>
      {/* */}
      <section className="services section" id="services" ref={ref}>
        <ScrollReveal className="services__container container grid">
          {trail.map((props, index) => (
            <animated.article key={index} style={props} className="services__card">
              <i className={`${services[index].icon} services__icon`} />
              <h2 className="services__title">{services[index].title}</h2>
              <p className="services__description">
                {services[index].desc.split('**').map((part, i) =>
                  i % 2 === 1 ? <strong key={i}>{part}</strong> : part
                )}
              </p>
            </animated.article>
          ))}
        </ScrollReveal>
      </section>
    </div>
  );
}

export default Services;