import ErrorBoundary from 'providers/error-boundary/ErrorBoundary.tsx'
import StoreProvider from 'providers/store-provider/StoreProvider.tsx'
import React from 'react'
import ReactDOM from 'react-dom/client'
import {BrowserRouter} from 'react-router-dom'
import App from './App.tsx'
import './assets/styles/index.scss'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <StoreProvider>
      <ErrorBoundary>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </ErrorBoundary>
    </StoreProvider>
  </React.StrictMode>,
)
