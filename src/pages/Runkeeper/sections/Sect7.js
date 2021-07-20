import React from 'react';
import ClosingCarousel from '../../../components/CSClosingCarousel/CSClosingCarousel';

const Sect7 = () => {
  const med = {fontWeight: 500}
  const semi = {fontWeight: 600}
  const perk = (
    <div>
      <p>By far, the biggest <span style={med}>perk</span> of this project was facilitating user research and testing for the first time. I discovered a true passion.</p>
      <p>Research was the missing ingredient to tastefully combine <span style={med}>my insatiable curiosity</span> about how other people think & <span style={med}>my desire to people-please</span> into efficient, helpful products.</p>
      <p>Usability testing allows real products to live and breathe. They continue to be reimagined time and time again. Reminds me of <i>“Have no fear of perfection, you’ll never reach it.” - Salvador Dali.</i> <span style={semi}>Everything</span> has room for improvement and growth!</p>
    </div>
  )
  const challenge = (
    <div>
      <p>In addition to this project being my first UX endeavor, the biggest <span style={med}>challenge</span> of this project was tackling such a dense subject matter. Insurance is a complicated product, with many different types and own set of vocabulary. It’s difficult to organize things when you don’t quite understand how it all fits together!</p>
      <p>I would have apprecciated more time to research, but I was proud of my learning curve working in an unfamiliar field.</p>
    </div>
  )
  const lesson = (
    <div>
      <p>& finally, the biggest <span style={med}>lesson</span> of this project was embracing the sheer power of simplicity. While it’s tempting to introduce lots of new features and decorate the page with flashy photos, things add up and get very complicated, very quickly.</p>
      <p>What this means for my overimaginative brain is that I’ve learned to keep my eye out for opportunities to simplify and ask, <i>“What is absolutely necessary for the best user experience?”</i></p>
      <p>Edit, and repeat!</p>
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

export default Sect7;