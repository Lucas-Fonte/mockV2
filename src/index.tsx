import * as dotenv from 'dotenv';
import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './App';
import { registerServiceWorker } from './serviceWorker';

dotenv.config();

if (process.env.NODE_ENV === 'production') {
  registerServiceWorker();
}
ReactDOM.render(<App />, document.getElementById('root'));
