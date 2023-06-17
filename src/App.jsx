import React from 'react'
import { Route, Routes } from "react-router-dom"
import Home from "./Pages/Home"
import Contact from "./Pages/Contact"
import About from "./Pages/About"
import NotFound from './Pages/NotFound'
import Header from './units/Header'

export default function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/about" element={<About/>} />
    <Route path="/contact" element={<Contact/>} />
    <Route path="*" element={<NotFound/>} />
  </Routes></div>
  )
}

