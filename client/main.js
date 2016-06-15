// Import React and JS
import '/node_modules/material-design-lite/material.js';
import '/node_modules/material-design-lite/material.css';
import '/imports/client/css/master.scss';
// import '/node_modules/mdl-ext/lib/mdl-ext.js';
import {createApp} from 'mantra-core';
import {initContext} from './../imports/client/js/configs/context';
import coreModule from './../imports/client/js/modules/main';

const context = initContext();
const app = createApp(context);

app.loadModule(coreModule);
app.init();
