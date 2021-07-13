import React from 'react';
import styles from './AboutHobbies.module.css';
import gblStyles from '../../../global.module.css';
import IconCard from '../../IconCard/IconCard';
import SONGWRITING from '../../../icons/songwriting.svg';
import DRAWING from '../../../icons/drawing.svg';
import MOVING from '../../../icons/moving.svg';

const AboutHobbies = () => {
  return (
    <section className={styles.hobbies}>
      <h2>When I'm not designing, I'm most likely...</h2>
      <ol>
        <li>
          <IconCard 
            title="1. Songwriting" 
            icon={SONGWRITING} 
            // caption={<p>Ah, my first true love. I am the band leader of <b>Dianella & the Arrows</b>, which you can learn more about <u><a>here</a></u>.</p>}
            caption={<p>Ah, my first true love. I am the band leader of <b>Dianella & the Arrows</b>, which you can learn more about <u>here</u>.</p>}
          />
        </li>
        <li>
          <IconCard 
            title="2. Drawing" 
            icon={DRAWING} 
            // caption={<p>With a pencil or a tablet, I love creating any which way I can. Check it out <u><a>here</a></u> if you’re interested!</p>}
            caption={<p>With a pencil or a tablet, I love creating any which way I can. Check it out <u>here</u> if you’re interested!</p>}
          />
        </li>
        <li>
          <IconCard 
            title="3. Moving" 
            icon={MOVING} 
            caption={<p>Running, hiking, walking, dancing, backpacking. I hate sitting still, & I love being outside. </p>}
          />
        </li>
      </ol>
      <a className={gblStyles.button} href="mailto:daniellekryce@gmail.com">Say Hello!</a>
    </section>
  )
}

export default AboutHobbies;