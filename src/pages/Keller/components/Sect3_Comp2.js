import React, {useState} from 'react';
import Thumbnail from '../../../images/keller-user-flow-thumb.jpg';
import MainSrc from '../../../images/keller-user-flow-main.png'
import Lightbox from 'react-image-lightbox';
import styles from './Sect3_Comp2.module.css';
import gblStyles from '../../../global.module.css';

const Component1 = () => {
  const [isOpen, setIsOpen] = useState(false)
  const med ={fontWeight: 500}
  return (
    <section className={`${styles.section} ${gblStyles.hPad}`}>
      <div className={styles.content}>
        <h4>User Flow</h4>
        <p>Using the personas <u><span style={med}>Jenny,</span></u> a string parent, & <u><span style={med}>Mary Jean,</span></u> an adult hobbyist, I envisioned the user’s journey through the website.</p>
        <p>I conducted a <span style={med}>card sorting test,</span> where participants are given “cards” and asked to sort them into categories. This shows me where users expect to see certain pages in the website’s navigation.</p>
        <p>The test results guided me to create this sitemap for the new website.</p>
      </div>
      <div className={styles.lightbox}>
        <button onClick={() => setIsOpen(true)}>
          <img src={Thumbnail} alt='Card Sorting Test' />
        </button>
        {isOpen && <Lightbox 
          mainSrc={MainSrc}
          onCloseRequest={() => setIsOpen(false)}
        />}
      </div>
    </section>
  )
}

export default Component1;