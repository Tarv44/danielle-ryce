import React, {useState} from 'react';
import Lightbox from 'react-image-lightbox';
import MainSrc from '../../../images/kaus-carousel-3.png';
import Thumbnail from '../../../images/kaus-carousel-3-thumbnail.jpg'

const Component3 = () => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <button onClick={() => setIsOpen(true)}>
      <img src={Thumbnail} alt="Sitemap"/>
      {isOpen && <Lightbox 
        mainSrc={MainSrc}
        onCloseRequest={() => setIsOpen(false)}
      />}
    </button>
  )
}

export default Component3;