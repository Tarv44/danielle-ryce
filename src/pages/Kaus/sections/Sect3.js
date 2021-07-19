import React from 'react';
import DefineCarousel from '../../../components/CSDefineCarousel/CSDefineCarousel';
import WireframeLink from '../../../components/WireframeLink';
import getData from '../data/Sect3_data';

const Sect3 = () => {
  const data = getData();
  return (
    <section>
      <DefineCarousel 
        title={data.title}
        desc={data.desc}
        carousel_data={data.carousel}
      />
      <WireframeLink url={'https://www.figma.com/file/diV9zfm4BEocMZIsVoRV17/Kaus-Wireframes-With-Annotations?node-id=0%3A1'} />
    </section>
  )
}

export default Sect3;