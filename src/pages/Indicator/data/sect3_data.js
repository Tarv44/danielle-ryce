import React from 'react';
import Component1 from '../components/Sect3_Component1/Sect3_Component1';
import Component2 from '../components/Sect3_Component2/Sect3_Component2';
import Component3 from '../components/Sect3_Component3/Sect3_Component3';
import Component4 from '../components/Sect3_Component4/Sect3_Component4';
import Component5 from '../components/Sect3_Component5/Sect3_Component5';

const data = () => {
  const bold = {fontWeight: 500}
  const green = {color: 'var(--color-green)'}
  return {
    title: `WHY BIZNEST FLEW THE COOP`,
    desc: (
      <>
        <p>Already, <span style={bold}>research had drastically evolved the app from my original idea into something else entirely</span>. But even after the myriad of brainstorms, the could-be solutions, the focus-shifts, and even after the name changes... there was still so much more growth to come!</p>
        <p><span style={{...bold, ...green}}>After synthesizing and defining my research, it resulted in the following wireframes.</span> However, if you love a good background story, click through to see the evolution.</p>
        <p><i>Pstttt, For the big <span style={bold}>EUREKA</span> moment, skip to the SME Interview tab.</i></p>
      </>
    ),
    carousel: [
      {
        title: `Wireframes`,
        content: null,
        component: (
          <Component1 />
        ),
      },
      {
        title: `Original Idea`,
        content: (
          <>
            <p>Let’s backtrack a little bit. When I first embarked on the creation of this app, I envisioned an app that would do... well, everything.</p>
            <p>Some sort of magical concoction where the user could keep tabs on all areas of business.</p>
            <p>I was a tad ambitious. I was also calling it Biznest due to the fact that it <i>“would help artists soar”</i>.... blech.</p>
          </>
        ),
        component: (
          <Component2 />
        ),
      },
      {
        title: `Persona`,
        content: (
          <>
            <p>To synthesize the user interview results, I created the persona, Joanna Marae.</p>
            <p>She embodies the passion & drive I saw in the participants, as well as the uncertainty of what to do next & inability to follow through on their plans.</p>
            <p>What Joanna wants is a hub for everything music business related. It includes some sort of business plan, and some project templates. However, she’ll be the first to admit she would hire a manager as soon as someone will take her, or she can afford it.</p>
          </>
        ),
        component: (
          <Component3 />
        ),
      },
      {
        title: `Sketches`,
        content: (
          <>
            <p>But, <i>sometimes what the user <b>wants</b>, isn’t what the user <b>needs</b></i>.</p>
            <p>There are countless apps for budgeting, scheduling, making project templates, tracking tasks, & more. So, that’s not it...</p>
            <p>What the user really needs is accountability & direction.</p>
            <p>So, at this point, the main focus became the connection to a “music industry coach” via weekly meetings & chat. Like music lessons, but for self-management.</p>
          </>
        ),
        component: (
          <Component4 />
        ),
      },
      {
        title: `SME Interview`,
        content: (
          <>
            <p>But then...I spoke to a Music Industry professor and he pointed out some flaws in the business strategy of my idea.</p>
            <p>The coaches would feel overworked and underpaid, unless it became very expensive for the user. Plus, he’s seen similar ideas fail in the past.</p>
            <p>He suggested using the strategy he uses with his clients. Choose certain metrics to keep track of, & determine next steps based off of those numbers.</p>
            <p>Boom. That’s it! The missing piece!</p>
          </>
        ),
        component: (
          <Component5 />
        ),
      },
    ]
  }
}

export default data;