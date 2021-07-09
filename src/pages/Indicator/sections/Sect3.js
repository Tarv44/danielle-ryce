import React , {useState, useEffect} from 'react';
import DefineCarousel from '../../../components/CSDefineCarousel/CSDefineCarousel';
import getData from '../data/sect3_data';

const Sect3 = () => {
  const data = getData()
  const five = window.innerWidth > 1200
  const [carousel, setCarousel] = useState(five ? data.carousel : data.carousel.slice(1,5))

  useEffect(() => {
    const handleResize = () => {
      const five = window.innerWidth > 1200
      setCarousel(five ? data.carousel : data.carousel.slice(1,5))
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <section>
      <DefineCarousel title={data.title} desc={data.desc} carousel_data={carousel} />
    </section>
  )
}

export default Sect3;