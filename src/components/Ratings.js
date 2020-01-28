import React from 'react'

const Ratings = ({ratings}) => {
  const stars = []
  for(let i = 0; i < ratings; i++) {
    stars.push(<img src="assets/star.svg" alt='star' key={i}/>)
  }

  return (
    <div>
      {stars}
    </div>
    
  );
};

export default Ratings