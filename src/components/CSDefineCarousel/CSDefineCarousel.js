import React, {useState} from 'react';
import styles from './CSDefineCarousel.module.css';
import ProgressTabs from './ProgressTabs/ProgressTabs';

const DefineCarousel = ({data}) => {
  const [index, setIndex] = useState(0)
  const titles = data.map(c => c.title)
  return (
    <section>
      <ProgressTabs 
        titles={titles}
        index={index}
        setIndex={setIndex}  
      />
    </section>
  )
}

export default DefineCarousel;