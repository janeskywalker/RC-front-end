import React from "react";

const Hero = () => {
  return (
    <header className="hero">
      <div>
        <div className="logo-contrainer">
          <img
            className="logo"
            src="/assets/logo-white.svg"
            alt="logo"
          />
        </div>
      </div>
      <h1 className="greeting">WELCOME TO Rooster Grin</h1>
      <button className="button">Button Button</button>
    </header>
  );
};

export default Hero;
