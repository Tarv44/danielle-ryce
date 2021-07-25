import Component1 from '../components/Sect4_Comp1';
import Component2 from '../components/Sect4_Comp2';
import Component3 from '../components/Sect4_Comp3';
import Component4 from '../components/Sect4_Comp4';
import Before1 from '../components/Sect4_Before1';
import Before2 from '../components/Sect4_Before2';
import Before3 from '../components/Sect4_Before3';
import Before4 from '../components/Sect4_Before4';
import Before5 from '../components/Sect4_Before5';
import After1 from '../components/Sect4_After1';
import After2 from '../components/Sect4_After2';
import After3 from '../components/Sect4_After3';
import After4 from '../components/Sect4_After4';
import After5 from '../components/Sect4_After5';
import After6 from '../components/Sect4_After6';

const data = {
  large: [
    {
      color: 'var(--color-bg-grey)',
      component: <Component1 />,
      title: 'Interval Timer & Automation Option',
      subtitle: 'Before'
    },
    {
      color: 'var(--color-bg-blue)',
      component: <Component2 />,
      title: 'Interval Timer & Automation Option',
      subtitle: 'After'
    },
    {
      color: 'var(--color-bg-grey)',
      component: <Component3 />,
      title: 'Track Your Progress',
      subtitle: 'Before'
    },
    {
      color: 'var(--color-bg-blue)',
      component: <Component4 />,
      title: 'Track Your Progress',
      subtitle: 'After'
    },
  ],
  int_before: [
    {
      color: 'var(--color-bg-grey)',
      component: <Before1 />,
      title: 'Interval Timer & Automation Option',
      subtitle: 'Before'
    },
    {
      color: 'var(--color-bg-grey)',
      component: <Before2 />,
      title: 'Interval Timer & Automation Option',
      subtitle: 'Before'
    },
    {
      color: 'var(--color-bg-grey)',
      component: <Before3 />,
      title: 'Interval Timer & Automation Option',
      subtitle: 'Before'
    },
  ],
  int_after: [
    {
      color: 'var(--color-bg-blue)',
      component: <After1 />,
      title: 'Interval Timer & Automation Option',
      subtitle: 'After'
    },
    {
      color: 'var(--color-bg-blue)',
      component: <After2 />,
      title: 'Interval Timer & Automation Option',
      subtitle: 'After'
    },
    {
      color: 'var(--color-bg-blue)',
      component: <After3 />,
      title: 'Interval Timer & Automation Option',
      subtitle: 'After'
    },
  ],
  track_before: [
    {
      color: 'var(--color-bg-grey)',
      component: <Before4 />,
      title: 'Track Your Progress',
      subtitle: 'Before'
    },
    {
      color: 'var(--color-bg-grey)',
      component: <Before5 />,
      title: 'Track Your Progress',
      subtitle: 'Before'
    },
  ],
  track_after: [
    {
      color: 'var(--color-bg-blue)',
      component: <After4 />,
      title: 'Track Your Progress',
      subtitle: 'After'
    },
    {
      color: 'var(--color-bg-blue)',
      component: <After5 />,
      title: 'Track Your Progress',
      subtitle: 'After'
    },
    {
      color: 'var(--color-bg-blue)',
      component: <After6 />,
      title: 'Track Your Progress',
      subtitle: 'After'
    },
  ],
}

export default data;