import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
// import initStoryshots, { imageSnapshot } from '@storybook/addon-storyshots';
import { Button, Welcome } from '@storybook/react/demo';
import App from '../App';

// initStoryshots({
//   suite: 'BURKINA FASO',
//   storyKindRegex: /elc-dropdown$/,
//   framework: 'react',
//   configPath: path.join(__dirname, '.stories'),
//   test: imageSnapshot({
//     storybookUrl: `http://localhost:9009`,
//     getScreenshotOptions,
//     getMatchOptions: () => ({
//       failureThreshold: 0.02,
//       failureThresholdType: 'percent'
//     })
//   })
// });

storiesOf('Welcome', module).add('to Storybook', () => <Welcome showApp={linkTo('Button')} />);
storiesOf('App', module)
  // .add('with text', () => <Button onClick={action('clicked')}>Hello Button</Button>)
  // .add('with some emoji', () => (
  //   <Button onClick={action('clicked')}>
  //     <span role="img" aria-label="so cool">
  //      😀 😎 👍 💯
  //     </span>
  //   </Button>
  // ))
  .add('with app', () => <App />)
  


