import React from 'react';
import CompLogos from '../../../images/kaus-comp.svg';
import Quote1 from '../../../images/kaus-quote-1.jpg';
import Quote2 from '../../../images/kaus-quote-2.jpg';
import Quote3 from '../../../images/kaus-quote-3.jpg';
import Quote4 from '../../../images/kaus-quote-4.jpg';
import Quote5 from '../../../images/kaus-quote-5.jpg';

const getData = () => {
  return {
    description: (
      <p>
        First up, research. My goals were to find out <b>what</b> users need, their likes and dislikes, <b>why</b> they would switch providers, and <b>how</b> they shop currently. What was my method of discovery, and what did I uncover? 
      </p>
    ),
    ca_content: (
      <>
        <p><b>What:</b>  In-depth look at companies’ websites and customer reviews on various sites. Assess their strengths & weaknesses to identify areas of opportunity in the industry.</p>
        <p><b>Who:</b> Prominent national insurance companies along with one smaller provider, and one quote comparison site. </p>
      </>
    ),
    ca_img: CompLogos,
    intvw_content: (
      <>
        <p><b>What:</b> Talk to people one on one to learn more about their experiences with insurance.</p>
        <p><b>Who:</b> Some participants had never had insurance & were shopping for the first time. Others have had all types of insurance for many years. One even worked in the insurance industry. Age range was 24-65.</p>
      </>
    ),
    intvw_quotes: [
      {
        quote: `”It’s for that one time something catastrophic happens… a smart investment.” `,
        img: Quote1,
      },
      {
        quote: `“If something made it seem like it was a straightforward, transparent process , I would go with them.”`,
        img: Quote2,
      },
      {
        quote: `“I would much rather spend an extra x amount of dollars to know that I feel a little more secured at the end of the day.”`,
        img: Quote3,
      },
      {
        quote: `“(List) specifically what they do, so I don't have to go through a ton of different pages or read a bunch of paragraphs.”`,
        img: Quote4,
      },
      {
        quote: `“They should be able to give you some sort of idea before you have to provide your life history.”`,
        img: Quote5,
      }
    ],
    annoying: [
      'No premade packages',
      'Quote process is invasive.',
      'Users have to provide a lot of personal information to wait and hear back about possible rates & coverage.',
      'Vocabulary & subject matter is complex, confusing, and not all the terms are universal',
    ],
    needs: [
      'Easy, simple research',
      'Fast signup process',
      'Clear descriptions of offerings',
      'Ability to compare coverage',
      'Transparency',
      'Personal connection',
      'Customer-first service',
      'Smooth claims process',
    ],
    closing: null,
    report: <p>What else did I uncover? For a full report, go <u><a target="_blank" rel="noreferrer" href='https://docs.google.com/document/d/1I2RiyiFBaGRbeJDUVknTZ1tIwHVFETayyqw0ByokUYU/edit?usp=sharing'>here</a></u>.</p>
  }
}

export default getData;