import React, {useState, useEffect} from 'react';
import Thumbnail from '../../../images/keller-user-flow-thumb.jpg';
import MainSrc from '../../../images/keller-user-flow-main.png'
import Lightbox from 'react-image-lightbox';
import styles from './Sect3_Comp2.module.css';
import gblStyles from '../../../global.module.css';
import handleResize from '../../../handle-resize';

const Component1 = () => {
  const [isVert, setIsVert] = useState(window.innerWidth <= 1060)
  const [isOpen, setIsOpen] = useState(false)
  const med ={fontWeight: 500}
  useEffect(() => {
    handleResize(() => setIsVert(window.innerWidth <= 1060))
  }, [isVert])
  return (
    <section className={`${styles.section} ${gblStyles.hPad}`}>
      <div className={styles.content}>
        <h4>User Flow</h4>
        {isVert && <button onClick={() => setIsOpen(true)}>
          <img src={Thumbnail} alt='Card Sorting Test' />
        </button>}
        <p>Using the personas <u style={med}>Jenny,</u> a string parent, & <u><span style={med}>Mary Jean,</span></u> an adult hobbyist, I envisioned the user’s journey through the website.</p>
        <p>I conducted a <span style={med}>card sorting test,</span> where participants are given “cards” and asked to sort them into categories. This shows me where users expect to see certain pages in the website’s navigation.</p>
        <p>The test results guided me to create this sitemap for the new website.</p>
      </div>
      {!isVert && <div className={styles.lightbox}>
        <button onClick={() => setIsOpen(true)}>
          <img src={Thumbnail} alt='Card Sorting Test' />
        </button>
      </div>}
      {isOpen && <Lightbox 
          mainSrc={MainSrc}
          onCloseRequest={() => setIsOpen(false)}
        />}
    </section>
  )
}

export default Component1;