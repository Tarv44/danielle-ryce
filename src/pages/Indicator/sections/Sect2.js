import React from 'react';
import styles from './Sect2.module.css';
import Process from '../../../components/case_study/CSProcess';

const Sect2 = () => {
  const desc = (
    <>
        <p>First up, research. I wanted to find out if other independent musicians were struggling like myself. <b
          >What</b> was holding them back from success in their opinion? <b
          >How</b> are they currently managing business? <b
          >Where</b> would they seek help, and <b>why</b>? Did this help exist already?
        </p> 
        <p>What was my method of discovery, and what did I uncover?</p>    
    </>
  )
  return (
    <section>
      <Process 
        title='It Takes Two To Tango'
        desc={desc}
      />
    </section>
  )
}

export default Sect2;