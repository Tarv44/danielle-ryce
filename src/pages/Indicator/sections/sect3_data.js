import React from 'react';

const data = () => {
  return {
    carousel: [
      {
        title: `Wireframes`,
        content: null,
        component: (
          <div>
            <h4>Image</h4>
          </div>
        ),
      },
      {
        title: `Original Idea`,
        content: (
          <>
            <p>Let’s backtrack a little bit. When I first embarked on the creation of this app, I envisioned an app that would do... well, everything.</p>
            <p>Some sort of magical concoction where the user could keep tabs on all areas of business.</p>
            <p>I was a tad ambitious. I was also calling it Biznest due to the fact that it “would help artists soar”.... blech.</p>
          </>
        ),
        component: (
          <div>
            <h4>Component</h4>
          </div>
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
          <div>
            <h4>Component</h4>
          </div>
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
          <div>
            <h4>Component</h4>
          </div>
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
          <div>
            <h4>Component</h4>
          </div>
        ),
      },
    ]
  }
}

export default data;