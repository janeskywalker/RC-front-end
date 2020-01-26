import React, { Component } from "react";
import "./App.css";
import Hero from "./components/Hero";
import SectionOne from "./components/SectionOne";
import SectionTwo from "./components/SectionTwo";
import SectionThree from "./components/SectionThree";
import SectionFour from "./components/SectionFour";
import SectionFive from "./components/SectionFive";
import Footer from "./components/Footer";

class App extends Component {
  render() {
    return (
      <div>
        <Hero />
        <main>
          <SectionOne />

          <SectionTwo />

          <SectionThree />

          <SectionFour />

          <SectionFive />
        </main>
        <Footer />
      </div>
    );
  }
}

export default App;
