import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
import { BFRouter } from './router.js';
import registerServiceWorker from './registerServiceWorker';
import './semantic/dist/semantic.min.css';

ReactDOM.render(<BFRouter/>, document.getElementById('root'));
registerServiceWorker();
