import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './App';
import { registerServiceWorker } from './serviceWorker';

if (process.env.NODE_ENV === 'production') {
  registerServiceWorker();
}
ReactDOM.render(<App />, document.getElementById('root'));
