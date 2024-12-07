// import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
// import "./App.css";
import "./assets/css/styles.css";
import "./assets/css/Home.css";
import Home from "./Components/Home";
import Header from "./Components/Header";
import About from "./Components/About";
import Skill from "./Components/Skill";
import Services from "./Components/Services";
import Projects from "./Components/Projects";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import Test from "./Components/Test";
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
    </>
  );
}

export default App;




