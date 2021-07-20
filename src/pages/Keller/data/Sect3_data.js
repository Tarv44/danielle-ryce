import React from 'react';
import Component1 from '../components/Sect3_Comp1';
import Component2 from '../components/Sect3_Comp2';
import Component3 from '../components/Sect3_Comp3';
import Component4 from '../components/Sect3_Comp4';
import Component5 from '../components/Sect3_Comp5';

const getData = () => {
  const weight = {fontWeight: 500}
  return {
    title: 'Define',
    desc: <p>Now it’s time to synthesize this information and put it to use mapping out our product, and building the foundational structure. How is this done? Follow in my footsteps below:</p>,
    carousel: [
      {
        title: `Personas`,
        content: (
          <>
            <p>I identified two personas from beharvioral patterns I observed during the interviews.</p>
            <p><b><u>Lindsey</u> & <u>Matt</u></b> are the personification of Kaus’ target audience segments.</p>
            <p>These personas helped guide decision making throughout the design process.</p>
            <p>I expanded on these personas, to gain further insight and understanding, with both empathy map and storyboard exercises. </p>
          </>
        ),
        component: <Component1 />,
      },
      {
        title: `Feature Roadmap`,
        content: (
          <>
            <p>A successful product is the perfect combination of fulfilling user and business needs, all within the realm of what is technically possible.</p>
            <p>So, I took the actionable insights from the user interviews & competitive analysis, and combined them with requests from the client brief.</p>
            <p>The result is a <span style={weight}>Feature Roadmap</span>. A document that lists all the features our product needs, from necessary to ideal,  for both customer and client satisfaction.</p>
          </>
        ),
        component: <Component2 />,
      },
      {
        title: `Sitemap`,
        content: (
          <>
            <p>How will all these features be structured on the website?</p>
            <p>To determine the Informational Architecture, I conducted a <span style={weight}>card sorting test</span>.</p>
            <p>6 participants organized the same set of cards into categories. Nearly all the cards were sorted into the same categories by each participant, with a small number of irregularities.</p>
            <p>Thanks to these conclusive results, the sitemap was simple to construct.</p>
          </>
        ),
        component: <Component3 />,
      },
      {
        title: `User Flows`,
        content: (
          <>
            <p>I imagined the potential paths a user would take to complete a handful of tasks on the website. This tests the usability and flow of the sitemap to make sure no stone is left unturned.</p>
            <p>I walked through <span style={weight}>Lindsey & Matt</span>’s entire experience with the website, as seen here in this <span style={weight}>user flow</span>.</p>
          </>
        ),
        component: <Component4 />,
      },
      {
        title: `Wireframes`,
        content: (
          <>
            <p>To pull all of this information together, I created these wireframes for key pages of the website.</p>
            <p>These outlines determine the location of key items and features.</p>
          </>
        ),
        component: <Component5 />,
      },
    ]
  }
}

export default getData;