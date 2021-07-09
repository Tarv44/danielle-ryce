import React from 'react';
import styles from './Sect3.module.css';

const Sect3 = () => {
  return (
    <section>
      <header>
        <h3>1. Research</h3>
        <p>
          First up, research. My goals were to find out <b>what</b
          > users need, their likes and dislikes, <b>why</b
          > they would switch providers, and <b>how</b
          > they shop currently. What was my method of discovery, and what did I uncover? 
        </p>
      </header>
      <main>
        <div>
          <h4>Competitive Analysis.</h4>
          <p><b>What:</b> In-depth look at companies’ websites and customer reviews on various sites. Assess their strengths & weakness to identify areas of opportunity in the industry.</p>
          <p><b>Who:</b> Prominent national insurance companies along with one smaller provider, and one quote comparison site.</p>
          {/* <img src={} alt={} /> //Logos - Or div component */}
        </div>
        <div>
          <h4>User Interviews.</h4>
          <p><b>What:</b> Talk to people one on one to learn more about their experiences with insurance.</p>
          <p><b>Who:</b> Some participants had never had insurance & were shopping for the first time. Others have had all types of insurance for many years. One even worked in the insurance industry. Age range was 24-65.</p>
          {/* --- Quote carousel goes here --- */}
        </div>
        <div>
        </div>
      </main>
    </section>
  )
}

export default Sect3;