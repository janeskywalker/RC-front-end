import React from "react";

const SectionThree = () => {
  return (
    <section className="section-three">
      <div className="text-wrapper">
        <h2 className="text-title">LOREM IPSUM DOLOR SIT AMET</h2>
        <p className="text-content">
          Enim laborum ea aute magna dolor exercitation eu dolor dolore laboris.
          Nisi commodo proident qui reprehenderit adipisicing mollit.
        </p>
        <p className="link"> > Lorem Ipsum</p>
      </div>
      <div className="icon-dash-board">
        <div className="icon-content">
          <img
            className="icon-img"
            src="/assets/home-expertise.svg"
            alt="home-expertise"
          />
        </div>
        <div className="icon-content">
          <img
            className="icon-img"
            src="/assets/home-hygiene.svg"
            alt="home-expertise"
          />
        </div>
        <div className="icon-content">
          <img
            className="icon-img"
            src="/assets/home-lab.svg"
            alt="home-expertise"
          />
        </div>
        <div className="icon-content">
          <img
            className="icon-img"
            src="/assets/home-retention.svg"
            alt="home-expertise"
          />
        </div>
        
      </div>
    </section>
  );
};

export default SectionThree;
