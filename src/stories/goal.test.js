import React from 'react';
import path from 'path';
// import fs from 'fs';
import initStoryshots, { imageSnapshot } from '@storybook/addon-storyshots';
// import { logger } from '@storybook/node-logger';

// Image snapshots
// We do screenshots against the static build of the storybook.
// For this test to be meaningful, you must build the static version of the storybook *before* running this test suite.
// const pathToStorybookStatic = path.join(__dirname, '../', 'storybook-static');

initStoryshots({
  suite: 'BURKINA FASO',
  storyKindRegex: /App$/,
  framework: 'react',
  configPath: path.join(__dirname, '..'),
  test: imageSnapshot({
    storybookUrl: `http://localhost:9009`,
    getMatchOptions: () => ({
      failureThreshold: 0.02,
      failureThresholdType: 'percent'
    })
  })
});
