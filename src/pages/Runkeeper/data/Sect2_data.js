import React from 'react';
import CompLogos from '../../../images/runkeeper-comp.svg';

const getData = () => {
  return {
    title: 'Running In Circles',
    description: (
      <>
        <p>
          First up, research. My immediate goals were to find out if runners already incorporate strength training into their routine, <b>why</b> or <b>why not</b>, and <b>how</b> do they feel about strength training? 
        </p>
        <p>What was my method of discovery, and what did I uncover?</p>
      </>
    ),
    ca_content: (
      <>
        <p><b>What:</b> In-depth look at competing apps. Assess their strengths & weaknesses to identify areas of opportunity in the industry.</p>
        <p><b>Who:</b> I explored other popular running apps, as well as two fitness, workout based apps. </p>
      </>
    ),
    ca_img: CompLogos,
    intvw_content: (
      <>
        <p><b>What:</b> Talk to people one on one to learn more about their running experiences.</p>
        <p><b>Who:</b> All four participants ran for fitness to some degree. I talked to a long distance runner, a trail runner, and two who used short outdoor runs as their typical cardio.</p>
      </>
    ),
    intvw_quotes: [
      {
        quote: `“(It’s been harder) to stay active, obviously running is the easiest option. It’s the cheapest, closest thing. I just go outside, and that’s pretty cool.”`,
      },
      {
        quote: `“I don’t work in a gym anymore so I still have to plan my workouts just like anyone else would. My brain doesn’t want to have to work after work.”`,
      },
      {
        quote: `“It was cheap, & I was poor, plus I needed to get out of the house. I would say running is a very meditative practice at this point.”`,
      },
      {
        quote: `“I mostly run for pleasure. I don’t generally do marathons or time myself.. It’s mostly just to get out, get some fresh air & move the body. It’s fun & natural.”`,
      }
    ],
    annoying: [
      'None do strength & running',
      'One time workouts',
      'No overall fitness plans either',
      'No training marathon plans',
      'No guidance',
      'Options are overwhelming',
    ],
    needs: [
      'Structured workout routine',
      'Someone to “tell them what to do”',
      'To prevent injury',
      'Ability to anaylze their performance',
      'Convenience & efficiency',
      'Sustainability',
    ],
    closing: closing(),
    report: null
  }
}

const closing = () => {
  const green = {color: 'var(--color-green)'}
  const med = {fontWeight: 500}
  const blue = {color: '#2E3F6B'}
  return (
    <>
      <p>All participants raved about the benefits of running. <i>“You may hate it at first, but after you feel great!” “It’s cheap and simple!” “It’s nice to get outside!”</i> However, when it came to strength training, <span style={{...med, ...blue}}>only two of the participants were currently incorporating it into their routine.</span> The other 2 stopped strength training after the pandemic hit.</p>
      <p>3 of the participants admitted they feel a <i style={{...blue, ...med}}>little lost and overwhelmed</i> when it comes to choosing a workout, and <span style={{...green,...med}}>they would prefer to just have an expert “tell them what to do.”</span> One of the participants was a former personal trainer and even she said she would rather follow workout videos instead of creating her own routines, due to the convenience.</p>
      <h4>These users need <u style={blue}>structure</u> and <u style={blue}>convenience</u>.</h4>
    </>
  )
}

export default getData;