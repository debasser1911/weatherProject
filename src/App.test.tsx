import App from './App'
import { render } from '@testing-library/react'
import React from 'react'
import { Provider } from 'react-redux'
import { setupStore } from './store/store'

// eslint-disable-next-line no-undef
test('render App', async () => {
  const store = setupStore()
  render(
    <Provider store={store}>
      <App />
    </Provider>
  )
})
