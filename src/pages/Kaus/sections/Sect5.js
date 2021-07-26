import React, {useState} from 'react';
import gblStyles from '../../../global.module.css';
import Lightbox from 'react-image-lightbox';
import Thumbnail from '../../../images/kaus-map-thumbnail.jpg'
import MainSrc from '../../../images/kaus-map-main.png'

// import styles from './Sect5.module.css';

const Sect5 = () => {
  const [isOpen, setIsOpen] = useState(false)
  const weight = {fontWeight: 500}
  const mapLink = (
    <button 
      onClick={() => setIsOpen(true)} 
      style={{display: 'inline', padding: 0, fontSize: 28}}
    >
      <u>
        <span style={weight}>affinty map</span>
      </u>
    </button>
  )
  const sectStyle = {
    display:'flex', 
    flexDirection:'column', 
    alignItems: 'center',
    marginBottom: 150
  }
  const mapLinkStyle = {
    display: 'inline-block',
    background: 'var(--color-bg-blue)',
    paddingTop: 13,
    paddingBottom: 13,
    paddingLeft: 20,
    paddingRight: 20,
    borderRadius: 0
  }
  return (
    <section style={sectStyle} className={gblStyles.csIntro}>
      <div className={gblStyles.hPad}>
        <h3>4. Testing</h3>
        <p>But, does it work? After putting together a <span style={weight}>protoype</span> with the wireframes, I gathered 5 participants for usability testing. They were presented with 3 different scenarios that involved tasks such as shopping for a homeowner’s policy, comparing policies, and using the Policy Match Generator.</p>
        <p>I organized the results into an {mapLink}:</p>
      </div>
      <div className={gblStyles.hPad}>
        <button onClick={() => setIsOpen(true)}>
          <img src={Thumbnail} alt="Affinity Map"/>
        </button>
        {isOpen && <Lightbox 
            mainSrc={MainSrc}
            onCloseRequest={() => setIsOpen(false)}
          />}
      </div>
      <div className={gblStyles.hPad}>
        <p>Overall, the participants really appreciated the primary features to shop, compare, or get matched.</p>
        <p style={{marginBottom: 50}}>Even though they noted that it was mostly a simple process, there were some common sticking points, especially when it came to vocabulary and comparing the policies against Kaus’ competitors.</p>
      </div>
      <div style={mapLinkStyle}>
        <p style={{margin: 0, fontSize: 18}}>Want to look at the affinity map in detail? Go <u><a style ={{fontSize: 18}} target="_blank" rel="noreferrer" href='https://miro.com/app/board/o9J_lUZR3L4=/'>here</a></u>.</p>
      </div>
    </section>
  )
}

export default Sect5;