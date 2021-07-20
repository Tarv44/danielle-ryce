import React from 'react';
import ClosingCarousel from '../../../components/CSClosingCarousel/CSClosingCarousel';
import { Link } from 'react-router-dom';

const Sect6 = () => {
  const med = {fontWeight: 500}
  const perk = (
    <div>
      <p>Like my <Link to='/indicator'><u>Indicator</u></Link> project, this process was also a wee bit self-motivated. Although I didn’t participate in sports growing up, I’ve evolved into a runner as an adult. However, I’ve been stumped when it comes to strength training that enhances my running and prevents injury without burning out and spending hours in a gym!</p>
      <p>I was happy to find out I wasn’t alone in feeling lost. Fitness is such a sensitive topic for so many people, but it can drastically enhance anyone’s life. With all the technology out there, we should be able to make staying active simpler for users. <span style={med}>I thoroughly enjoyed getting to work on a simple solution in a complicated fitness world.</span></p>
    </div>
  )
  const challenge = (
    <div>
      <p>The biggest challenge was <span style={med}>undoing the curse of knowledge</span>. As an avid user of the app, I know how it works like the back of my hand & was completely blind to some of the UX issues I discovered during testing.</p>
      <p>But, after testing, I was able to correct a few of these issues, such as adding a “Generate Workout” button to the Build Your Own workout screen and adding labels to the icons in the Workout screen itself.</p>
      <p>Oh... and <span style={med}>staying within Runkeeper’s style</span>. Let’s just say I’m not a huge fan of it aesthetically, but it gets the job done!</p>
    </div>
  )
  const lesson = (
    <div>
      <p><span style={med}>I ended up scrapping my first and second rounds of user testing for this project</span>. At <span style={med}>first</span>, I wanted to go through the workout with users. Aka, physically work out with participants using the app. But, that got distracting and well, sweaty. The <span style={med}>second</span> round I tried to use Maze, an online testing platform. But, I complicated the test with too many options & there were a lot of technical difficulties.</p>
      <p>In the end, I tested over Zoom, watching participants navigate through the prototype via shared screens. <span style={med}>TLDR: You can still gain powerful insight through testing even if the user isn’t in the <b><i>exact</i></b> shoes they’d be in while using your product.</span></p>
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