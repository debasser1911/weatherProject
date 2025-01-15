import { render, screen } from '@testing-library/react';
import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { test } from 'vitest';
import App from './App';
import store from './store/store';

test('renders App component', () => {
  render(
    <Provider store={store}>
      <BrowserRouter basename="/">
        <App />
      </BrowserRouter>
    </Provider>,
  );

  // Assuming App component has a text "Hello World" for testing purpose
  // expect(screen.getByTestId('app')).toContain('Longtitude');
});
