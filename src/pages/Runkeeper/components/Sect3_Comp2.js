import React from 'react';
import Roadmap from '../../../images/kaus-carousel-2.jpg';

const Component2 = () => {
  const padding = {
    paddingTop: 40,
    paddingBottom: 40,
    paddingLeft: 58,
    paddingRight: 58
  }
  return (
    <div style={{background: '#ffffff',...padding}}>
      <img src={Roadmap} alt="Kaus Roadmap Charts" />
    </div>
  )
}

export default Component2;