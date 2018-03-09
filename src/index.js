import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BFRouter } from './router.js';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<BFRouter/>, document.getElementById('root'));
registerServiceWorker();
