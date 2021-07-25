import React, { useEffect, useState } from 'react';
import PersonaCard from '../../../components/CSPersonaCard/CSPersonaCard';
import Profile from '../../../images/runkeeper-persona.jpg';
import styles from './Sect3_Comp1.module.css';
import handleResize from '../../../handle-resize';

const Component1 = () => {
  const [isVert, setIsVert] = useState(window.innerWidth <= 1200)
  const med ={fontWeight: 500}
  const personaCard = (
    <div className={styles.persona}>
      <PersonaCard
        name="Rachel McDonald"
        profile={Profile}
        details={data.details}
        chars={data.chars}
        charSize={20}
        goals={data.goals}
        needs={data.needs}
        pains={data.pains}
      />
    </div>
  )

  useEffect(() => {
    handleResize(() => setIsVert(window.innerWidth<= 1200))
  }, [isVert])
  return (
    <section className={styles.section}>
      <div className={styles.content}>
        <h4>Persona</h4>
        {isVert && personaCard}
        <p>I created the persona, <span style={med}>Rachel McDonald</span>, to embody the characteristics of the two participants who were no longer working out, as I felt they needed the most help getting back into strength training.</p>
        <p>Again, the resulting need was similar: <span style={med}>simple, yet effective workouts</span> that Rachel could easily include in her weekly routine.</p>
      </div>
      {!isVert && personaCard}
    </section>
  )
}

const data = {
  details: [
    `Female, 30yo`,
    `Cincinnati, OH`,
    `Marketing`,
    `Apple Watch, iPhone`
  ],
  chars: [
    `Self Disciplined`,
    `Goal Oriented`,
    `Perfectionist`,
  ],
  goals: [
    `Prevent injury`,
    `Prepare for her first marathon`,
    `See how she progresses over time`,
    `Enhance her running`
  ],
  needs: [
    `Workouts that compliment her marathon training`,
    `Sustainable schedule`,
    `Track her progress over time`,
    `Convenience`,
    `Simplicity`
  ],
  pains: [
    `No time to research workouts`,
    `Unfamiliar with strength training`,
    `Hates to go to the gym`,
    `Worried about burnout`,
    `Losing muscle due to too much cardio`
  ]
}

export default Component1;