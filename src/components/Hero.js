import React from "react";

const Hero = () => {
  return (
    <header className="hero">
      <div className="logo-contrainer">
          <img
            className="logo"
            src="/assets/logo-white.svg"
            alt="logo"
          />
      </div>

      <div className="hero-wrapper">
        <div className='filling'></div>
        <div className='greetings'>
          <h1 className="greetings-text">WELCOME TO</h1>
          <h1 className="greetings-text-2">Rooster Grin</h1>
          <button className="btn hero-">Button Button</button>
        </div>
        <div className='filling'></div>
      </div>
    </header>
  );
};

export default Hero;
