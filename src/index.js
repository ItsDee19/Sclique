import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

ReactDOM.render((
  <BrowserRouter basename={process.env.PUBLIC_URL}>
                <App/>
                </BrowserRouter>
), ...)


