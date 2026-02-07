// import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
// import "./App.css";
import "./assets/css/styles.css";

import Home from "./Components/Home";
import Header from "./Components/Header";
import About from "./Components/About";
import Skill from "./Components/Skill";
import Services from "./Components/Services";
import Projects from "./Components/Projects";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import ScrollUp from "./Components/ScrollUp";

import "./assets/js/scrollreveal.min.js";

function App() {
  return (
    <>
      {/* <Test></Test> */}
      <Header></Header>
      <Home></Home>
      <About></About>
      <Skill></Skill>
      <Services></Services>
      <Projects></Projects>
      <Contact></Contact>
      <Footer></Footer>
      <ScrollUp></ScrollUp>
    </>
  );
}

export default App;




