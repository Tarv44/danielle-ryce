import React from 'react';
import Process from '../../../components/CSProcess/CSProcess';
import Analysis from '../../../components/CSAnalysis/CSAnalysis';
import getData from '../data/Sect2_data';

const Sect2 = () => {
  const data = getData();
  return (
    <section>
      <Process 
        title='All Strung Out'
        desc={data.description}
      />
      <Analysis 
        ca_content={data.ca_content}
        ca_img={data.ca_img}
        margin={data.margin}
        intvw_content={data.intvw_content} 
        intvw_quotes={data.intvw_quotes}
        ulWidth={361}
        annoying={data.annoying}
        good={data.good}
        needs={data.needs}
        closing={data.closing}
        report={data.report}
      />
    </section>
  )
}

export default Sect2;