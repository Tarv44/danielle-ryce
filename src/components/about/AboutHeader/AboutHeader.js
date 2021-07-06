import React from 'react';
import Danielle from '../../../images/prof-pic.svg';
import styles from './AboutHeader.module.css';

const AboutHeader = () => {
  return (
    <header className={styles.aboutHeader}>
      <main className={styles.main}>
        <div className={styles.text}>
          <h1>About Me</h1>
          <p>Like many others <i>(okay, nearly everyone),</i> I am a <b>creative.</b></p>
          <p>I aim to encourage, excite, and amplify others’ voices through my outlets of fresh, welcoming design & imaginative, invigorating music.</p>
        </div>
        <div className={styles.imgDiv}>
          <img className={styles.img} src={Danielle} alt="Profile picture of Danielle Ryce" />
        </div>
      </main>
      <p><i>(Pst, Danielle? I’d like to skip all this. Just give me the <u><a>resume</a></u>.)</i></p>
    </header>

  )
}

export default AboutHeader;