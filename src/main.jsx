import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from "react-router-dom"
import { store } from "../src/Store.js"
import { Provider } from 'react-redux'
import { PersistGate } from "redux-persist/integration/react"
import { persistStore } from 'redux-persist'


let persistor = persistStore(store)
ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
  <BrowserRouter>
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <App />
      </PersistGate >

    </Provider>

  </BrowserRouter>
  // </React.StrictMode >,
)
