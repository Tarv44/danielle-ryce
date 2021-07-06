import  React from 'react';
import styles from './About.module.css';
import Header from '../../components/about/AboutHeader/AboutHeader';
import Bio from '../../components/about/AboutBio/AboutBio';
import Hobbies from '../../components/about/AboutHobbies/AboutHobbies';
import Resume from '../../components/about/AboutResume/AboutResume';

const About = () => {
  return (
    <main className={styles.about}>
      <Header />
      <Bio />
      <Hobbies />
      <hr className={styles.hr} />
      <Resume />
    </main>
  )
}

export default About;