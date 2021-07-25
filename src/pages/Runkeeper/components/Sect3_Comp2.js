import React, {useState, useEffect} from 'react';
import Diagram from '../../../images/runkeeper-diagram.jpg';
import styles from './Sect3_Comp2.module.css';
import handleResize from '../../../handle-resize';

const Component2 = () => {
  const [isVert, setIsVert] = useState(window.innerWidth <= 1200)
  const diagram = <img src={Diagram} alt="Ven Diagram"/>
  useEffect(() => {
    handleResize(() => setIsVert(window.innerWidth<= 1200))
  }, [isVert])
  return (
    <section className={styles.section}>
      {!isVert && diagram}
      <div className={styles.content}>
        <h4>Project Goals</h4>
        {isVert && diagram}
        <p>I found this exercise to be particularly helpful for this project, due to the fact that it helped me see the bigger picture. </p>
        <p>I needed to identify why adding this feature to the Runkeeper app was both beneficial to the company <b><i>and</i></b> the user.</p>
        <p>The company would benefit greatly by standing out against all its competitors, which would lead to more users, subscriptions, and active time in the app.</p>
        <p>Users would benefit from the affordability and convenience of having a personal trainer in their pocket!</p>
      </div>
    </section>
  )
}

export default Component2;