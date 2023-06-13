import React from 'react'
import ReactDom from 'react-dom/client'
import App from './component/App.js'
import './Stil/style.css'

const root=ReactDom.createRoot(document.querySelector("#root"))

root.render(<App/>)
