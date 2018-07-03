import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import store from './ducks/store';
import { BrowserRouter as R } from 'react-router-dom';
import { Provider } from 'react-redux';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
<R><Provider store={store}><App /></Provider></R>, document.getElementById('root'));
registerServiceWorker();
