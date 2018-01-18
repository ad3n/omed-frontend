import React from 'react';
import ReactDOM from 'react-dom';
import Omed from './omed';
import registerServiceWorker from './registerServiceWorker';

import './style.css';
ReactDOM.render(<Omed />, document.getElementById('root'));
registerServiceWorker();
