import React from 'react'

const PageIndicator = ({currentIndex, numOfSlides}) => {
  console.log({currentIndex, numOfSlides})
  const circles = []
  for(let i = 0; i < numOfSlides; i++) {
    circles.push(<div className={currentIndex === i ? 'circle active' : 'circle'} key={i}></div>)
  }

  return (
    <div className='circle-container'>
      {circles}
    </div>
    
  );
};

export default PageIndicator