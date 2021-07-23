import React from 'react';
import ClosingCarousel from '../../../components/CSClosingCarousel/CSClosingCarousel';

const Sect6 = () => {
  const med = {fontWeight: 500}
  const boldBlue = {...med, color: '#2E3F6B'}
  const perk = (
    <div>
      <p>Keller Strings hired me as their website manager about 6 months after I graduated college. I worked on their website for over 5 years adding products and news announcements to the page, constantly trying to manipulate the Wordpress theme to look decent.</p>
      <p>Obviously I had some personal motivation to redo the site, <span style={boldBlue}>but primarily my heart is filled to the brim knowing that I was able to give them a redesign as a small token of a gratitude.</span> John & Paula, the owners of Keller Strings, are some of the sweetest people on the earth, and I can never thank them enough for all the kindness, guidance, & generosity they’ve shown me over the years.</p>
    </div>
  )
  const challenge = (
    <div>
      <p>The biggest challenge of this redesign was <span style={boldBlue}>figuring out a way to make such the daunting purchase of an instrument, digestible.</span></p>
      <p>As one of the interview participants stated, <i>“I didn’t realize violins are like cars.”</i> Unless you’re a professional, you really don’t know what you’re looking for in an instrument. You’re truly putting your trust in the hands of strangers who are hopefully the experts they claim to be.</p>
      <p>I believe I softened the blow by providing links to educational resources, showcasing financing options, & simplifying the vocabulary in the product descriptions.</p>
    </div>
  )
  const lesson = (
    <div>
      <p>Even though I had synthesized research results before, this was a whole new beast. Because I interviewed 8 participants, the amount of information I uncovered was overwhelming.</p>
      <p>I realized I was obsessed with notating each participant’s exact thoughts word by word, every single suggestion and frustration. But I wasn’t building the website for these 8 participants, I was building it for the Keller Strings’ community.</p>
      <p><span style={boldBlue}>I learned that it’s good to “zoom out” and look at the bigger picture. Find the patterns and themes, and go from there.</span></p>
    </div>
  )
  return (
    <section style={{marginBottom: 150}}>
      <ClosingCarousel 
        perk={perk}
        challenge={challenge}
        lesson={lesson}
      />
    </section>
  )
}

export default Sect6;