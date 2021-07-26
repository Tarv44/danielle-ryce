import React from 'react';
import Header from '../../../components/CSHeader/CSHeader';
import Intro from '../../../components/CSIntro/CSIntro';
import RunkeeperPhones from '../../../images/runkeeper-phones-intro.png';
import RunkeeperPhones2 from '../../../images/runkeeper-phones-overview.png';

const Sect1 = () => {
  return (
    <section>
        <Header 
          title='Runkeeper'
          color='var(--color-lgt-purple'
          img={RunkeeperPhones}
          alt='Display for Kaus on laptop'
          link='https://www.figma.com/proto/WYDabuc48Pz9uLfrhmLI8F/Runkeeper-Prototype-Copy?page-id=169%3A0&node-id=232%3A5&viewport=132%2C232%2C0.0379241518676281&scaling=scale-down'
        />
        <Intro 
          titleWidth={'70%'}
          title='Adding a Feature to an Existing App'
          role='UX Designer / 4 Week Sprint / Apr-May 2021'
          img={RunkeeperPhones2}
          color='var(--color-lgt-purple)'
          background='In a world that’s full of fitness programs boasting about how their short, high intensity workouts eliminate the need for cardio, where does a runner turn to for an efficient workout?'
          objective='Curated, follow-along, strength training workouts built for runners. Ability to “Build Your Own” workout, and option to incorporate these workouts into the marathon training programs.'
        />
    </section>
  )
}

export default Sect1;