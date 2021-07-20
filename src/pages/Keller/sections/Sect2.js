import React from 'react';
import Process from '../../../components/CSProcess/CSProcess';
import Analysis from '../../../components/CSAnalysis/CSAnalysis';
import getData from '../data/Sect2_data';

const Sect2 = () => {
  const data = getData();
  return (
    <section>
      <Process 
        title='Research'
        desc={data.description}
      />
      <Analysis 
        ca_content={data.ca_content}
        ca_img={data.ca_img}
        intvw_content={data.intvw_content} 
        intvw_quotes={data.intvw_quotes}
        annoying={data.annoying}
        needs={data.needs}
        closing={data.closing}
        report={data.report}
      />
    </section>
  )
}

export default Sect2;