import ReactDOM from 'react-dom';
import './index.css';
import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import store from './store/store';

const container = document.getElementById('root');
if (!container) {
  throw new Error('Failed to find the app container');
}
const root = createRoot(container);

root.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
);
