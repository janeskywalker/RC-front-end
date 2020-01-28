import React from "react";
import Rating from "./Ratings"
import PageIndicator from "./PageIndicator"

const Carousel = () => {
  const [state, setState] = React.useState({
    slides: [
      {
        title: "Title One",
        ratings: 1,
        author: "Joe Doe",
        date: "01/01/20",
        body: "Fugiat eiusmod deserunt Lorem velit duis aute ullamco officia cillum nostrud do. Magna amet culpa Lorem sunt elit dolore mollit. Aliqua fugiat Lorem voluptate veniam veniam irure id eu ."
      },
      {
        title: "Title Two",
        ratings: 5,
        author: "John Smith",
        date: "01/01/20",
        body: "Officia magna est in officia fugiat eiusmod pariatur amet. Exercitation incididunt proident est ipsum. Lorem deserunt cillum deserunt veniam. Exercitation tempor. Lorem deserunt cillum deserunt veniam. "
      },
      {
        title: "Title Three",
        ratings: 3,
        author: "Elsa Jones",
        date: "01/01/20",
        body: "Sit labore proident in aliqua nisi elit dolor occaecat incididunt sit id. Sunt ad enim tempor esse esse nisi sunt tempor do exercitation ipsum incididunt est. Et eiusmod do proident aute ullamco."
      },
    ],
    currentIndex: 0,
  });

  const currentSlide = state.slides[state.currentIndex]
  const numOfSlides = state.slides.length

  return (
      <section className='carousel'>
        <div className="title-container">
          <h2>{currentSlide.title}</h2>
          <Rating ratings={currentSlide.ratings}/>
        </div>
        <div className="body-container">
          {/* <button className='backward-btn' > */}
          <div className="styling-carousel-1">
            <div className="styling-carousel-2">
              <div className="backward-arrow" onClick={() => {
              if(state.currentIndex > 0){
                setState({
                  ...state,
                  currentIndex: state.currentIndex - 1
                })
              }
            }}></div>
                {/* </button> */}
              <div className="body-text-content">
                <p className='author-date'>{currentSlide.author} {currentSlide.date}</p>
                <p className="body-content">{currentSlide.body}</p>
                <PageIndicator className="page-indicator" currentIndex={state.currentIndex} numOfSlides={numOfSlides}/>
              </div>
              {/* <button className='forward-btn'> */}
              <div className="forward-arrow" onClick={() => {
              if(state.currentIndex < numOfSlides - 1) {
                setState({
                  ...state,
                  currentIndex: state.currentIndex + 1
                });
              }
            }}></div>
            {/* </button> */}
            </div>
          </div>
        </div>
      </section>
  );
};

export default Carousel;
