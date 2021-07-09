import React, {useState} from 'react';
import styles from './CSDefineCarousel.module.css';
import ProgressTabs from './ProgressTabs/ProgressTabs';
import CarouselScreen from './CarouselScreen/CarouselScreen';

const DefineCarousel = ({data}) => {
  const [index, setIndex] = useState(0)
  const titles = data.map(c => c.title)

  const handleLeft = () => {
    if (index === 0 ) setIndex(data.length-1)
    else setIndex(index-1)
  }

  const handleRight = () => {
    if (index === data.length-1) setIndex(0)
    else setIndex(index+1)
  }
  return (
    <section>
      <ProgressTabs 
        titles={titles}
        index={index}
        setIndex={setIndex}  
      />
      <CarouselScreen 
        data={data}
        index={index}
        handleLeft={handleLeft}
        handleRight={handleRight}
      />
    </section>
  )
}

export default DefineCarousel;