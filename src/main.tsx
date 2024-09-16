import React from 'react'
import ReactDOM from 'react-dom/client'
import "./assets/scss/app.scss"
import App from './App.tsx'
import './index.css'
import { configureStore } from '@reduxjs/toolkit'
import { Provider } from 'react-redux'
import rootReducer from './slice/index.ts'
import { BrowserRouter } from 'react-router-dom'

const store = configureStore({
  reducer: rootReducer,
  devTools: true,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: true
  })
})

ReactDOM.createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <React.Fragment>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </React.Fragment>
  </Provider>
)
