import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './containers/app'

import 'bootstrap/dist/css/bootstrap.min.css'
import '../src/css/fontawesome.min.css'
import '../src/sass/style.scss'



ReactDOM.createRoot(document.getElementById('root')).render(
   <React.StrictMode>
      <App />
   </React.StrictMode>,
)
