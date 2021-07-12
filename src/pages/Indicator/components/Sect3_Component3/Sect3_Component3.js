import React from 'react';
import styles from './Sect3_Component3.module.css'
import PersonaCard from '../../../../components/CSPersonaCard/CSPersonaCard';
import Profile from '../../../../images/indicator_carousel3.png';

const Component3 = () => {
  const details = [
    `Female, 31 yo`,
    `New Orleans, LA`,
    `Musician, Bandleader`,
    `Devices: iPhone, Mac`
  ]
  const chars = [
    `Creative`,
    `Organized`,
    `Driven`,
    `Indecisive`,
  ]
  const goals = [
    `Grow her career`,
    `Feel secure in her decisions`,
    `Hire a manager or get signed`,
    `Play original music full time`,
  ]
  const needs = [
    `Guidance from an expert`,
    `Accountability`,
    `Help seeing the bigger picture`,
    `One place to keep track of everything`,
    `Help with marketing, tours, etc.`,
  ]
  const pains = [
    `Uncertainty about she should do`,
    `No time to research business tactics`,
    `Doesn’t feel like her time is being spent very efficiently`,
    `Problems keeping up with her tasks`,
    `Trouble deciding which path to take`,
  ]
  return (
    <PersonaCard
      name="Joanna Marae"
      profile={Profile}
      details={details}
      chars={chars}
      goals={goals}
      needs={needs}
      pains={pains}
    />
  )
}

export default Component3;