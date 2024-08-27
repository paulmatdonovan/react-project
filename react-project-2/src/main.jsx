import React from 'react';
import { createRoot } from 'react-dom/client'
import ReactDOM from 'react-dom';
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom';
import ShopContextProvider from './ShopContext/ShopContext.jsx'

createRoot(document.getElementById('root')).render(
  <ShopContextProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ShopContextProvider>,

);
