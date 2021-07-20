import React, {useState} from 'react';
import Lightbox from 'react-image-lightbox';
import MainSrc from '../../../images/kaus-carousel-4-main.png';
import Thumbnail from '../../../images/kaus-carousel-4-thumbnail.jpg'

const Component4 = () => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <button onClick={() => setIsOpen(true)}>
      <img src={Thumbnail} alt="UserFlow"/>
      {isOpen && <Lightbox 
        mainSrc={MainSrc}
        onCloseRequest={() => setIsOpen(false)}
      />}
    </button>
  )
}

export default Component4;