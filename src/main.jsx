import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter } from 'react-router-dom';
import App from './App';

import './css/reset.css';
import './css/common.css';
import './css/style.css';

// HashRouter: GitHub Pages 등 정적 호스팅에서 새로고침 404 방지 (/#/project/xxx)
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HashRouter>
      <App />
    </HashRouter>
  </React.StrictMode>
);
