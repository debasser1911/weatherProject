import { render } from '@testing-library/react';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { test } from 'vitest';
import {App} from './index';

test('renders App component', () => {
  render(
      <BrowserRouter basename="/">
        <App />
      </BrowserRouter>
  );

  // Assuming App component has a text "Hello World" for testing purpose
  // expect(screen.getByTestId('app')).toContain('Longtitude');
});
