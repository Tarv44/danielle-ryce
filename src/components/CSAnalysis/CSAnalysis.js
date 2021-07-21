import React from 'react';
import styles from './CSAnalysis.module.css';

import CompAnal from '../CSCompAnal/CSCompAnal';
import Interviews from '../CSInterviews/CSInterviews';
import Dropdown from '../CSDropdown/CSDropdown';

const Analysis = (props) => {
  const {
    intvw_content, 
    intvw_quotes, 
    closing, 
    report, 
    ca_content, 
    ca_img,
    annoying,
    good,
    needs,
    ulWidth,
    margin
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
            margin={margin}
          />
        </div>
        <Dropdown
          ulWidth={ulWidth} 
          annoying={annoying}
          good={good}
          needs={needs}
        />
      </section>
      <section className={styles.closing}>
        {closing}
        {report && <div className={styles.report}>
          {report}
        </div>}
      </section>
    </section>
  )
}

export default Analysis;