import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Product from './components/Product'
import { store } from './store/store'
import { useSelector } from 'react-redux'
import Home from './pages/Home'
import { Outlet } from 'react-router-dom'
import Header from './components/Header'

function App() {
  return ( 
    <>
    <Header/>
    <Outlet/>
    </>
    
  )
}

export default App
