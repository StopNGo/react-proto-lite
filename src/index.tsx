import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { HelmetProvider } from 'react-helmet-async'
import { BrowserRouter } from 'react-router-dom'

import { App } from './App'

import { USE_SERVICE_WORKER } from 'constants/commonConstants'
import { Provider } from 'react-redux'
import { initStore } from 'store/store'

import 'style/main.scss'

const store = initStore()

if (module.hot != null) {
  module.hot.accept(['store/store', 'store/rootReducer'], () => {
    ;(async () => {
      const { mainReducer } = await import('store/rootReducer')
      store.replaceReducer(mainReducer)
    })()
      .then(() => {})
      .catch((er) => console.log(er))
  })
}

if (
  USE_SERVICE_WORKER &&
  String(process.env.NODE_ENV).trim() !== 'development'
) {
  const startServiceWorkerPromise = async (): Promise<void> => {
    const { startServiceWorker } = await import('./serviceWorker')
    startServiceWorker()
  }

  startServiceWorkerPromise()
    .then(() => {})
    .catch((er) => console.log(er))
}

const indexJSX = (
  <StrictMode>
    <Provider store={store}>
      <HelmetProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </HelmetProvider>
    </Provider>
  </StrictMode>
)

const container = document.getElementById('root')
if (container == null) throw new Error('Failed to find the root element')

createRoot(container).render(indexJSX)
