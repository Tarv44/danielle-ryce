import  React from 'react';
import styles from './About.module.css';
import Header from '../../components/page_about/AboutHeader/AboutHeader';
import Bio from '../../components/page_about/AboutBio/AboutBio';
import Hobbies from '../../components/page_about/AboutHobbies/AboutHobbies';
import Resume from '../../components/page_about/AboutResume/AboutResume';

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