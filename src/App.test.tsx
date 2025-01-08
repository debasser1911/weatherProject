import App from './App'
import { render, screen } from '@testing-library/react'
import React from 'react'
import { Provider } from 'react-redux'
import '@testing-library/jest-dom'
import store from './store/store'

// eslint-disable-next-line no-undef
test('render App', async () => {
  render(
    <Provider store={store}>
      <App />
    </Provider>
  )
  // eslint-disable-next-line no-undef
  // expect(screen.getByTestId('city-label')).toBeTruthy()
})
