// Import React and JS
import '../css/master.scss';

import '/node_modules/material-design-lite/material.js';
// import '/node_modules/mdl-ext/lib/mdl-ext.js';
import {createApp} from 'mantra-core';
import {initContext} from './configs/context';
import coreModule from './modules/main';

const context = initContext();
const app = createApp(context);

app.loadModule(coreModule);
app.init();
