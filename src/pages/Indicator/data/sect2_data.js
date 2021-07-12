import React from 'react';
import image1 from '../../../images/indicator-quote1.svg';
import image2 from '../../../images/indicator-quote2.svg';
import image3 from '../../../images/indicator-quote3.svg';
import image4 from '../../../images/indicator-quote4.svg';
import image5 from '../../../images/indicator-quote5.svg';
import ca_img from '../../../images/indicator-comp.svg';

const closing = () => {
  const bold = {fontWeight: 500}
  const blueIt = {
    color: 'var(--color-blue)',
    fontStyle: 'italic'
  }
  return (
    <>
      <p>One thing was abundantly clear, <span style={bold}>these musicians were just as lost as me when it came to music business.</span> They asked for every tool under the sun: budgeting spreadsheets, task management, & more. <span style={{...bold, ...blueIt}}>However, these tools already exist, so why weren’t they using them?</span></p>
      <p>The interview participant excelling the most was part of a duo. He explained how helpful it was to have his partner hold him accountable for actions and to push each other forward. Uh...<span style={bold}>Lightbulb!</span></p>
      <p>All participants voiced some concerns about feeling overwhelmed and lost when it came to the many paths they could take to success. They were proud of their accomplishments, but they couldn’t quite pinpoint what they did to achieve those milestones.</p>
      <h4>In conclusion, the future users of Indicator need: <u>accountability</u>, <u>guidance</u>, and the ability to <u>track their progress</u>.</h4>
    </>
  )
}

const sect2_data = () => {
  return {
    desc: (
      <>
          <p>First up, research. I wanted to find out if other independent musicians were struggling like myself. <b
            >What</b> was holding them back from success in their opinion? <b
            >How</b> are they currently managing business? <b
            >Where</b> would they seek help, and <b>why</b>? Did this help exist already?
          </p> 
          <p>What was my method of discovery, and what did I uncover?</p>    
      </>
    ),
    ca_content: (
      <>
        <p><b>What:</b> In-depth look at some general business and music business focused products. I also searched for music industry coaching and educational courses.</p>
        <p>Analyzed these products for strengths, weaknesses, and of course, areas of opportunity. </p>
      </>
    ),
    ca_img: ca_img,
    intvw_content: (
      <>
        <p><b>What:</b> Talk to people one on one to learn more about their music business experience. </p>
        <p><b>Who:</b> Independent musicians pursing a career in writing, recording, and/or performing original music. All have many years of experience working with original music groups, as band leaders & members. </p>
      </>
    ),
    intvw_quotes: [
      {
        quote: `“I think the biggest hurdle for me personally is that there are so many directions you can go... I get so overwhelmed with the choices.” `,
        img: image1
      },
      {
        quote: `“I feel like there are so many different steps, and I don’t know the best one. Some days I think I’ll do this, and then some days I’m like, what the...”`,
        img: image2
      },
      {
        quote: `“That (creative energy) being all over the place, I do know what I need to do but I don’t really know how....I’m trying to tune in to what is sustaining & fulfilling at the same time.`,
        img: image3
      },
      {
        quote: `“Yes & no. I have a plan, but I’m afraid that plan isn’t going to work... We all spend so much time doing things that we think are going to help & end up in the same place.”`,
        img: image4
      },
      {
        quote: `“In my perfect world, it would be 1970, and you sign up with a record label, and they just take care of everything.”`,
        img: image5
      },
    ],
    annoying: [
      'Complicated',
      'Self-guided task management',
      'Unpersonalized business plans',
      'Made for the business-minded',
      'Need many different programs',
      'No 1-1 coaching (4/5)',
    ],
    needs: [
      'Complicated',
      'Self-guided task management',
      'Unpersonalized business plans',
      'Made for the business-minded',
      'Need many different programs',
      'No 1-1 coaching (4/5)'
    ],
    closing: closing(),
    report: <p>View the full report in detail <u><a target="_blank" rel="noreferrer" href='https://www.figma.com/exit?url=https%3A%2F%2Fwww.figma.com%2Fproto%2FtLYA8cmmw9yxZezB0yLSRo%2FBiznest-Research-Findings%3Fnode-id%3D15%253A5%26scaling%3Dmin-zoom'>here</a></u>.</p>,
  }
}

export default sect2_data;