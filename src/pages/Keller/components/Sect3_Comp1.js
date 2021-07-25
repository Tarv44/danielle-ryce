import React, {useEffect, useState} from 'react';
import Thumbnail from '../../../images/keller-card-sorting-thumb.svg';
import MainSrc from '../../../images/keller-card-sorting-main.png'
import Lightbox from 'react-image-lightbox';
import styles from './Sect3_Comp1.module.css';
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
      {!isVert && <div className={styles.lightbox}>
        <button onClick={() => setIsOpen(true)}>
          <img src={Thumbnail} alt='Card Sorting Test' />
        </button>
      </div>}
      <div className={styles.content}>
        <h4>Card Sorting Test</h4>
        {isVert && <button onClick={() => setIsOpen(true)}>
          <img src={Thumbnail} alt='Card Sorting Test' />
        </button>}
        <p>During the user interviews, I uncovered some mild confusion about where things were located on the existing website, so I wanted to ensure the navigation of the new site was as strong as possible.</p>
        <p>I conducted a <span style={med}>card sorting test,</span> where participants are given “cards” and asked to sort them into categories. This shows me where users expect to see certain pages in the website’s navigation.</p>
        <p>The test results guided me to create this sitemap for the new website.</p>
      </div>
      {isOpen && <Lightbox 
          mainSrc={MainSrc}
          onCloseRequest={() => setIsOpen(false)}
        />}
    </section>
  )
}

export default Component1;