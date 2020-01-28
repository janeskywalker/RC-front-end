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
      <div className='greetings'>
        <h1 className="greetings-text">WELCOME TO Rooster Grin</h1>
      </div>
      <button className="btn">Button Button</button>
    </header>
  );
};

export default Hero;
