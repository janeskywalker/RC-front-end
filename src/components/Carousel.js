import React from "react";
import Rating from "./Ratings"
import PageIndicator from "./PageIndicator"

const Carousel = () => {
  const [state, setState] = React.useState({
    slides: [
      {
        title: "Title One",
        ratings: 1,
        author: "Author 1",
        date: "01/01/20",
        body: "Fugiat eiusmod deserunt Lorem velit duis aute ullamco officia cillum nostrud do. Magna amet culpa Lorem sunt elit dolore mollit. Aliqua fugiat Lorem voluptate veniam veniam irure id eu laborum labore quis velit culpa."
      },
      {
        title: "Title Two",
        ratings: 5,
        author: "Author 2",
        date: "01/01/20",
        body: "Officia magna est in officia fugiat eiusmod pariatur amet. Exercitation incididunt proident est ipsum. Lorem deserunt cillum deserunt veniam. Exercitation tempor culpa excepteur officia. Officia officia culpa aute.."
      },
      {
        title: "Title Three",
        ratings: 3,
        author: "Author 3",
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
        <button onClick={() => {
          if(state.currentIndex < numOfSlides - 1) {
            setState({
              ...state,
              currentIndex: state.currentIndex + 1
            });
          }
        }}>Go Forward</button>
        <p className="body-content">{currentSlide.body}</p>
        <PageIndicator currentIndex={state.currentIndex} numOfSlides={numOfSlides}/>
        <button onClick={() => {
          if(state.currentIndex > 0){
            setState({
              ...state,
              currentIndex: state.currentIndex - 1
            })
          }
        }}>Go Back</button>
      </div>
    </section>
  );
};

export default Carousel;
