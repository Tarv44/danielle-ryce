import React , {useState, useEffect} from 'react';
import DefineCarousel from '../../../components/CSDefineCarousel/CSDefineCarousel';
import WireframeLink from '../../../components/WireframeLink';
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
  }, [data.carousel]);

  return (
    <section style={{marginBottom: 100}}>
      <DefineCarousel title={data.title} desc={data.desc} carousel_data={carousel} />
      <WireframeLink url='https://www.figma.com/exit?url=https%3A%2F%2Fwww.figma.com%2Ffile%2FULopdih9v1tzAtZTkc7V0v%2FIndicator-Wireframes%3Fnode-id%3D16%253A0' />
    </section>
  )
}

export default Sect3;