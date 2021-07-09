import React from 'react';
import DefineCarousel from '../../../components/CSDefineCarousel/CSDefineCarousel';
import getData from './sect3_data';

const Sect3 = () => {
  const data = getData()

  return (
    <section>
      <DefineCarousel data={data.carousel} />
    </section>
  )
}

export default Sect3;