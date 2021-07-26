import React, { useEffect, useState } from 'react';
import SmallCarousel from '../../../components/CSSmallCarousel/CSSmallCarousel';
import PersonaCard from '../../../components/CSPersonaCard/CSPersonaCard';
import Profile1 from '../../../images/kaus-persona-1.jpg';
import Profile2 from '../../../images/kaus-persona-2.jpg';
import handleResize from '../../../handle-resize';

const Component1 = () => {
  const [isVert, setIsVert] = useState(window.innerWidth <= 1200)
  const data1 ={
    name: 'Lindsey Davis',
    details: [
      'Female, 31 yo',
      'Bellevue, Washington',
      'HR Manager',
      '$80,000 salary',
    ],
    chars: [
      'Responsible',
      'Busy',
      'Social',
      'Proactive'
    ],
    goals: [
      'Be prepared',
      'Be rewarded for her patronage',
      'Kinder process for filing claims',
      'Be proactive'
    ],
    needs: [
      'Quick breakdown of information',
      'Levels of coverage available',
      'Connection to a person/agent',
      'Good customer reviews',
      'Proof it’s a reliable company',
      'More benefits'
    ],
    pains: [
      'Doesn’t understand her rising rates',
      'No time to research new',
      'No preventative coverage for maintenance',
      'Wary of filing a claim because of her car accident experience'
    ]
  }
  const data2 ={
    name: 'Matt Anderson',
    details: [
      'Male, 24 yo',
      'New Orleans, Louisiana',
      'Barista & Student',
      '$25,000 salary'
    ],
    chars: [
      'Relaxed',
      'Worker',
      'Intellectual',
      'Effecient',
    ],
    goals: [
      'Complete the chore',
      'Signup, pay, be done with it',
      'Add a sense of security and peace for him & his girlfriend',
    ],
    needs: [
      'Easy signup process',
      'Transparent breakdown of what the company can do for him',
      'Objective display of reviews',
      'Less ads',
      'Needs to feel customer-forward'
    ],
    pains: [
      'Not sure what he needs',
      'Wants affordable, but not cheap',
      'All seem exactly the same',
      'Doesn’t want to provide info',
      'Not enough info up front',
      'Ads are manipultative & pushy'
    ]
  }
  const cards = [
    <PersonaCard
      name={data1.name}
      profile={Profile1}
      details={data1.details} 
      chars={data1.chars} 
      goals={data1.goals} 
      needs={data1.needs} 
      pains={data1.pains}
    />,
    <PersonaCard
    name={data2.name}
    profile={Profile2}
    details={data2.details} 
    chars={data2.chars} 
    goals={data2.goals} 
    needs={data2.needs} 
    pains={data2.pains}
    />
  ]

  useEffect(() => {
    handleResize(() => setIsVert(window.innerWidth <= 1200))
  })
  return (
    <div>
      {!isVert && <SmallCarousel cards={cards} />}
      {isVert && cards[0]}
    </div>
  )
}

export default Component1;