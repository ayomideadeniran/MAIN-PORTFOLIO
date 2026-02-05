/* eslint-disable react/prop-types */

import { useSpring, animated } from "react-spring";
import { useInView } from "react-intersection-observer";
import Image2 from "../assets/img/saferoute.png";
import Image3 from "../assets/img/project-img-2.jpg";
import Image5 from "../assets/img/FileUpload.png";
import Image6 from "../assets/img/slidesaferoute.png";
import Image7 from "../assets/img/Text to Speech.png";
import Image8 from "../assets/img/FULLBACKED.png";
import Image9 from "../assets/img/tech.png";
import Image11 from "../assets/img/FASTDELIV.png";
import aiTechImage from "../assets/img/AI-tech.png";
import predictImage from "../assets/img/predict.png";
import walletValidatorImage from "../assets/img/Ethereum Wallet Validator.png";
import bitcoinImage from "../assets/img/Bitcoin.png";
import fileOrganiserImage from "../assets/img/fileorganiser.png";
import scrreenImage from "../assets/img/scrreen.png";
import tradingDashboardImage from "../assets/img/trading_dashboard.png";
import shieldedAmmImage from "../assets/img/shielded_amm.png";
import anchorSecurityImage from "../assets/img/anchor_security.png";

const projectsData = [
  {
    image: shieldedAmmImage,
    subtitle: "Starknet / ZK-Rollup",
    title: "Shielded Concentrated Liquidity AMM",
    links: [
      { url: "https://github.com/ayomideadeniran/Shielded-Concentrated-Liquidity-AMM-on-Starknet-Ztarknet-", text: "GitHub Repo" }
    ]
  },
  {
    image: tradingDashboardImage,
    subtitle: "Web App / Design",
    title: "Trading Analytics Dashboard",
    links: [
      { url: "https://github.com/ayomideadeniran/Design-Trading-Analytics-Dashboard-with-Journal-Portfolio-Analysis", text: "GitHub Repo" }
    ]
  },
  {
    image: aiTechImage,
    subtitle: "AI / Tools",
    title: "AI Tech Navigator",
    links: [
      { url: "https://ai-tech-navigator.vercel.app/", text: "Live App" },
      { url: "https://github.com/ayomideadeniran/AI-Tech-Navigator.git", text: "GitHub Repo" }
    ]
  },
  {
    image: "https://github.com/ayomideadeniran/BitStakeNet---Resolve-Hackathon/raw/main/assets/banner.png",
    subtitle: "StarkNet / Web3",
    title: "BitStarkNet — Resolve Hackathon",
    links: [
      { url: "https://github.com/ayomideadeniran/BitStakeNet---Resolve-Hackathon.git", text: "GitHub Repo" }
    ]
  },
  {
    image: anchorSecurityImage,
    subtitle: "Solana / Security / Rust",
    title: "Intermediate Developer Challenge - Anchor Pinocchio Security Template",
    links: [
      { url: "https://github.com/ayomideadeniran/Intermediate-Developer-Challenge-Anchor-Pinocchio-Security-Template", text: "GitHub Repo" }
    ]
  },
  {
    image: scrreenImage,
    subtitle: "Python / AI / Education",
    title: "🎓EDUCATIONAL AI AGENT SYSTEM",
    links: [
      { url: "https://github.com/ayomideadeniran/edu-agent-platform", text: "GitHub Repo" }
    ]
  },
  {
    image: fileOrganiserImage,
    subtitle: "Rust",
    title: "File Organizer with Rust",
    links: [
      { url: "https://github.com/ayomideadeniran/File-Organizer-with-Rust", text: "Github Repo" }
    ]
  },
  {
    image: bitcoinImage,
    subtitle: "Web3/Blockchain",
    title: "BITCOIN OFFLINE",
    links: [
      { url: "https://www.canva.com/design/DAGnrxyzEUQ/asYued1m0NioXpOFca5unw/view?utm_content=DAGnrxyzEUQ&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=hee236b2a2f", text: "Canva Live Link" },
      { url: "https://github.com/ayomideadeniran/BITCOIN-OFFLINE-", text: "Github Repo" }
    ]
  },
  {
    image: walletValidatorImage,
    subtitle: "Web3/Blockchain",
    title: "Ethereum Wallet Validator",
    links: [
      { url: "https://ethereum-wallet-validator.vercel.app/", text: "Live App" },
      { url: "https://github.com/ayomideadeniran/Ethereum-Wallet-Validator", text: "Github Repo" }
    ]
  },
  {
    image: predictImage,
    subtitle: "Cairo-Smart Contract/Web3/Blockchain",
    title: "Predict Tomorrow's Economy",
    links: [
      { url: "https://predict-tomorrow-s-economy.vercel.app/", text: "Live App" },
      { url: "https://github.com/ayomideadeniran/Predict-Tomorrow-s-Economy", text: "Frontend Repo" },
      { url: "https://github.com/ayomideadeniran/Predict-Tomorrow-s-Economy-Contract", text: "Smart Contract Repo" }
    ]
  },
  {
    image: Image2,
    subtitle: "Web App",
    title: "SafeRoute-NG",
    links: [
      { url: "https://saferoute-ng-frontend.onrender.com/", text: "MY AFRICAS TALKING PROJECT" },
      { url: "https://github.com/ayomideadeniran/AFRICAS-TALKING-API.git", text: "GITHUB Link" }
    ]
  },
  {
    image: Image9,
    subtitle: "Web3/Blockchain",
    title: "ATech Bootcamp",
    links: [
      { url: "https://a-tech-bootcamp.vercel.app/", text: "ATech Bootcamp project" },
      { url: "https://github.com/ayomideadeniran/ATech", text: "GITHUB Link" }
    ]
  },
  {
    image: Image5,
    subtitle: "Web-App",
    title: "File Upload",
    links: [
      { url: "https://files-imageupload.onrender.com", text: "File Upload project" }
    ]
  },
  {
    image: Image6,
    subtitle: "Graphics Design",
    title: "SafeRoute-NG Slide Design",
    links: [
      { url: "https://www.canva.com/design/DAGXSR3F91E/5AnHVc62ej0Vgv51JQ1_vw/view?utm_content=DAGXSR3F91E&utm_campaign=designshare&utm_medium=link&utm_source=editor#11", text: "", iconOnly: true }
    ]
  },
  {
    image: Image7,
    subtitle: "Mern Stack Project",
    title: "AUTISM APP",
    links: [
      { url: "https://autismapp.vercel.app/", text: "FOR STUDENT WITH STUDY DISABILITY" }
    ]
  },
  {
    image: Image8,
    subtitle: "Full Stack Project",
    title: "Github Repo",
    links: [
      { url: "https://github.com/ayomideadeniran/FULL-BACKEND-PROJECT.git", text: "gitHub repo of Profile-image upload and Fetch, Forgot-password, Registration, Login" }
    ]
  },
  {
    image: Image11,
    subtitle: "ZION HACKTHON PITCH",
    title: "FASTDELIV Website Ideal",
    links: [
      { url: "https://www.canva.com/design/DAGhCdVKiWA/bGSqfsCaKD6rv9WGaxYDEg/view?utm_content=DAGhCdVKiWA&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h2a586edce6", text: "MY ZION HACKTHON PITCH IDEAL" },
      { url: "https://drive.google.com/drive/folders/1-u00G6FENr-kFAm-tvo--AvE0_W5EImA", text: "GITHUB Link" }
    ]
  },
  {
    image: Image3,
    subtitle: "StarkNet / Web3",
    title: "Micropay Micropayments",
    links: [
      { url: "https://github.com/ayomideadeniran/micropay", text: "GitHub Repo" }
    ]
  }
];

import { FiGithub, FiExternalLink } from "react-icons/fi";

const ProjectCard = ({ project }) => {
  const [ref, inView] = useInView({ threshold: 0.2 });
  const animationProps = useSpring({
    opacity: inView ? 1 : 0,
    transform: inView ? "translateY(0)" : "translateY(50px)",
    config: { mass: 1, tension: 120, friction: 14 }
  });

  // Split subtitle strings like "React / Node / AI" into an array for badges
  const techTags = project.subtitle.split("/").map(tag => tag.trim());

  return (
    <animated.article ref={ref} style={animationProps} className="projects__card">
      <div className="projects__image-container">
        <img src={project.image} alt={project.title} className="projects__img" />
        <div className="projects__overlay"></div>
      </div>

      <div className="projects__content">
        <h3 className="projects__title">{project.title}</h3>

        <div className="projects__tags">
          {techTags.map((tag, index) => (
            <span key={index} className="projects__tag">{tag}</span>
          ))}
        </div>

        <div className="projects__links">
          {project.links.map((link, index) => (
            <a
              key={index}
              href={link.url}
              className="projects__link-btn"
              target="_blank"
              rel="noopener noreferrer"
              aria-label={link.text}
            >
              {link.text.toLowerCase().includes("github") || link.text.toLowerCase().includes("repo") ? (
                <><FiGithub /> Code</>
              ) : (
                <><FiExternalLink /> Live</>
              )}
            </a>
          ))}
        </div>
      </div>
    </animated.article>
  );
};

function Projects() {
  return (
    <div>
      {/* <!--==================== PROJECTS ====================--> */}
      <section className="projects section" id="projects">
        <h3 className="section__subtitle">
          My <span>Jobs</span>
        </h3>
        <h2 className="section__title">Recent Projects</h2>
        <div className="projects__container container grid">
          {projectsData.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </section>
    </div>
  );
}

export default Projects;
