import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import { BrowserRouter, Route, Routes } from "react-router-dom"
import NavBar from './components/NavBar'
import CreateNewPost from './components/CreateNewPost.jsx'
import EditPage from './components/EditPage'
import DetailsPage from './components/DetailsPage'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <Routes>
      <Route path="/" element={<NavBar />} />
        <Route index={true} element={<App />} />
      <Route index={false} path="/create-new-post" element={<CreateNewPost />} />
      <Route index={false} path="/details/:id" element={<DetailsPage />} />
      <Route index={false} path="/edit/:id" element={<EditPage />} />
  </Routes>
  </BrowserRouter>
)
