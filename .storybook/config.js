import React from 'react';
import { configure, setAddon } from '@storybook/react';
import { configureDoc } from 'storybook-addon-props'


const addWithDoc = configureDoc({
  trackerUrl:
    'https://github.com/*%',
});

setAddon(addWithDoc);

const req = require.context('../components', true, /.stories.js$/);

function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
