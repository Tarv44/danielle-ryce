import React from 'react';
import CompLogos from '../../../images/keller-comp.svg';

const getData = () => {
  return {
    description: (
      <>
        <p>
          First up, research. My goals were to find out the current perception of the website. <b>What</b> do users like & dislike about the existing site, & <b>why?</b> I also wanted to pinpoint how users currently shop for instruments, and how they <b>feel</b> about the process.
        </p>
        <p>What was my method of discovery, and what did I uncover?</p>
      </>
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
        <p><b>What:</b> Talk to people 1 on 1 to learn about their experiences shopping for instruments.</p>
        <p><b>Who:</b> 8 participants ranging in age from 30-65+. Keller Strings’ target audience: professional musicans, adult hobbyists, and “string moms.” 2 were not existing customers of Keller Strings.</p>
      </>
    ),
    intvw_quotes: [
      {
        quote: `“I didn’t realize violins are like cars, they really vary. I didn’t realize it was such a personal purchase.”`,
      },
      {
        quote: `“I could pick up all these things & play them, but it ain’t gonna sound like the best it can. Nobody’s asking me to test drive a racecar. No one’s going to know what it’s capable of if I get behind the wheel.”`,
      },
      {
        quote: `“I didn’t know what to do with all the information, it was a bit overwhelming, but I liked that there was so much there.”`,
      },
      {
        quote: `“Honestly, it’s like when you look at people, you first look to see if they’re attractive or not. It’s human nature to look at the prettiest thing, so I’m looking at that. & price is definitely a factor.”`,
      },
      {
        quote: `“I’m looking for somebody who’s experienced to tell me it’s high quality...I definitely want that feedback from a professional, hey this is really good and this is why.”"`,
      },
      {
        quote: `“It’s very tricky with someone like me who doesn’t really know. I can appreciate good craftsmanship, I’m an art historian, but just because it sounds cool, it doesn’t really mean anything to me.”`,
      },
    ],
    margin: '9%',
    annoying: [
      'Usually very cramped pages',
      'None are very elegant',
    ],
    good: [
      'Strong navigation & top menus',
      'Neat, clean product grids'
    ],
    needs: [
      'Connection to an expert',
      'Guidance',
      'Great quality at affordable costs',
      'Range of options',
      'Convenience',
      'Community'
    ],
    closing: closing(),
    report: <p>What else did I uncover? For a full report, go <u><a target="_blank" rel="noreferrer" href='https://docs.google.com/presentation/d/1ZbsFr8dweATyhPZrQfG7ueY7nmnfiCtd8TAcKaJXqWk/edit?usp=sharing'>here</a></u>.</p>
  }
}

const closing = () => {
  const bold = {fontWeight: 500}
  const boldBlue = {
    color: '#2E3F6B',
    ...bold
  }
  return (
    <>
      <p>Keller Strings’ existing customers appreciate having a violin specialist nearby, and rave about the excellent customer service. They love the warmth of the shop, the resource center and string community the shop provides.</p>
      <p>Although they do have a large customer base of professional musicians, the majority of Keller Strings’ customers are <span style={boldBlue}>novice players or parents of beginner students</span>. They generally feel overwhelmed at the amount of information in this new field, and flounder about where to begin. In terms of instruments, they know they want something of quality, but they are worried about overpaying. They don’t always understand the cost differences, or what makes a good instrument.</p>
      <p>They rely on the owners, John & Paula, to guide them in the right direction, and count on them for their wealth of knowledge in the subject. </p>
      <h4>My goal was clear: How can we recreate that warmth and guidance on the website?</h4>
    </>
  )
}

export default getData;