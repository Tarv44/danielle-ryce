import React from 'react';
import styles from './CSAnalysis.module.css';

import CompAnal from './CSCompAnal/CSCompAnal';
import Interviews from './CSInterviews/CSInterviews';
import Dropdown from './CSDropdown/CSDropdown';

const Analysis = (props) => {
  const {
    intvw_content, 
    intvw_quotes, 
    closing, 
    report, 
    ca_content, 
    ca_img,
    annoying,
    needs
  } = props
  return (
    <section >
      <section className={styles.analysis}>
        <div className={styles.sides}>
          <CompAnal 
            content={ca_content}
            img={ca_img}
          />
          <Interviews
            content={intvw_content}
            quotes={intvw_quotes}
          />
        </div>
        <Dropdown 
          annoying={annoying}
          needs={needs}
        />
      </section>
      <section className={styles.closing}>
        {closing}
        <div className={styles.report}>
          {report}
        </div>
      </section>
    </section>
  )
}

export default Analysis;