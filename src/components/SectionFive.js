import React from "react";

const SectionFive = () => {
  return (
    <section className="section-five">
      <div className="text-wrapper">
        <h2 className="text-title">LOREM IPSUM DOLOR SIT AMET</h2>
        <div className="stars-wrapper"></div>
      </div>
      <div className="carousel-wrapper">
        <div
          id="carouselExampleIndicators"
          className="carousel slide"
          data-ride="carousel"
          data-interval="2500"
        >
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img
                src="https://img.andrewprokos.com/TORONTO-PANORAMIC-SKYLINE-DUSK-1200PX.jpg"
                className="carousel-img"
                alt="..."
              />
            </div>
            <div className="carousel-item">
              <img
                src="https://i.imgur.com/IdQbfbg.jpg"
                className="carousel-img"
                alt="..."
              />
            </div>
            <div className="carousel-item">
              <img
                src="https://i.imgur.com/alSqEz8.jpg"
                className="carousel-img"
                alt="..."
              />
            </div>
          </div>
          <a
            className="carousel-control-prev"
            href="#carouselExampleIndicators"
            role="button"
            data-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="sr-only">Previous</span>
          </a>
          <a
            className="carousel-control-next"
            href="#carouselExampleIndicators"
            role="button"
            data-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="sr-only">Next</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default SectionFive;
