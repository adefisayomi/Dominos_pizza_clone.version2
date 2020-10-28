import React from 'react';
import ReactDOM from 'react-dom';
import StateProvider from "./components/contexts/StateProvider"
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <StateProvider>
    <App />
    </StateProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();
