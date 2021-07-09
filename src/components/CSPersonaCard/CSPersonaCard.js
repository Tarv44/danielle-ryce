import React from 'react';
import styles from './CSPersonaCard.module.css';

const PersonaCard = (props) => {
  const {name, profile, details, chars, goals, needs, pains} = props

  const detail_lis = details.map((d,i) => <li key={i}>{d}</li>)
  const chars_str = chars.join(' - ')
  const goal_lis = goals.map((g, i) => <li key={i}>{g}</li>)
  const need_lis = needs.map((n, i) => <li key={i}>{n}</li>)
  const pain_lis = pains.map((p, i) => <li key={i}>{p}</li>)
  return (
    <div className={styles.card}>
      <div className={styles.profileDetails}>
        <div className={styles.details}>
          <img src={profile} alt={name} />
          <div>
            <h5>{name}</h5>
            <ul>
              {detail_lis}
            </ul>
          </div>
        </div>
        <div className={styles.chars_str}>
          <p>{chars_str}</p>
        </div>
      </div>
      <div className={styles.goals}>
        <h6>Goals</h6>
        <ul>
          {goal_lis}
        </ul>
      </div>
      <div className={styles.needs}>
        <h6>Needs</h6>
        <ul>
          {need_lis}
        </ul>
      </div>
      <div className={styles.pains}>
        <h6>Pains</h6>
        <ul>
          {pain_lis}
        </ul>
      </div>
    </div>
  )
}

export default PersonaCard;