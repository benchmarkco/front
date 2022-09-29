import React from 'react'
import ReactDOM from 'react-dom/client'
import RouterApp from './pages/RouterApp';

import './style.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterApp />
  </React.StrictMode>
)
