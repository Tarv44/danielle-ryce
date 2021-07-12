import React from 'react';
import ClosingCarousel from '../../../components/CSClosingCarousel/CSClosingCarousel';


const Sect7 = () => {
  const perk = (
    <>
      <p>My favorite part of this project was getting to use my new UX design skillset in conjunction with my other passion, music. <b>I got to use both sides of my brain</b>, as I thought critically and uniquely before bringing the ideas to life in an aesthetically pleasing way.</p>
      <p>Because of the personal nature of the problem, I was truly motivated to find a solution. It was great to work with other musicians, and I feel as though I’ve tapped into something special.</p>
      <p>Who knows, you may see Indicator in an app store near you in the not so distant future ;)</p>
    </>
  )

  const challenge = (
    <>
      <p>The most challenging aspect of this project was <b>reigning in all my wildest dreams</b>. When it came to a solution, I knew it had to be simple, but I kept adding and adding and adding. So many options!</p>
      <p>I went through several iterations of sketches to narrow down my ideas and fine tune the core features of the app. These were also molded by many discussions with other designers, and a music industry subject matter expert, as I mentioned earlier in the case study.</p>
      <p>I’ve discovered that my approach is to think of all the possibilities, and then cut back to the necessities. & then, cut again... & again.</p>
    </>
  )

  const lesson = (
    <>
      <p>An interesting lesson I learned during this design process was that users’ needs are sometimes different than what users want.</p>
      <p>During the user interviews, the participants requested everything from budgeting spreadsheets to promotion planning to business plans and more. But these things already exist, and are relatively easy to access.</p>
      <p>The users were having problems following through with plans and determining the affect of their actions. After identifying this pattern, the trajectory for the app completely changed! <b>Users don’t always know what they need, & it’s up to designers to find the solution!</b></p>
    </>
  )
  return (
    <section>
      <ClosingCarousel 
        challenge={challenge}
        perk={perk}
        lesson={lesson}
      />
    </section>
  )
}

export default Sect7;