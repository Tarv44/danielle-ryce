import React, {useState} from 'react';
// import styles from './CSDefineCarousel.module.css';
import gblStyles from '../../global.module.css';
import ProgressTabs from './ProgressTabs/ProgressTabs';
import CarouselScreen from './CarouselScreen/CarouselScreen';

const DefineCarousel = ({title, desc, carousel_data}) => {
  const [index, setIndex] = useState(0)
  const titles = carousel_data.map(c => c.title)

  const handleLeft = () => {
    if (index === 0 ) setIndex(carousel_data.length-1)
    else setIndex(index-1)
  }

  const handleRight = () => {
    if (index === carousel_data.length-1) setIndex(0)
    else setIndex(index+1)
  }
  return (
    <section>
      <div className={`${gblStyles.csIntro} ${gblStyles.hPad}`}>
        <h3>2. {title}</h3>
        {desc}
      </div>
      <ProgressTabs 
        titles={titles}
        index={index}
        setIndex={setIndex}  
      />
      <CarouselScreen 
        data={carousel_data}
        index={index}
        handleLeft={handleLeft}
        handleRight={handleRight}
      />
    </section>
  )
}

export default DefineCarousel;