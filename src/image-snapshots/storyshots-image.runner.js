import path from 'path';
import fs from 'fs';
import initStoryshots, { imageSnapshot } from '@storybook/addon-storyshots';
import { logger } from '@storybook/node-logger';

const pathToStorybookStatic = path.join(__dirname, '../../', 'storybook-static');

initStoryshots({
  suite: 'Image snapshots',
  storyKindRegex: /App$/,
  framework: 'react',
  test: imageSnapshot({
    storybookUrl: `file://${pathToStorybookStatic}`,
    getMatchOptions: () => ({
      failureThreshold: 0.02, // 2% threshold,
      failureThresholdType: 'percent',
    }),
  }),
});