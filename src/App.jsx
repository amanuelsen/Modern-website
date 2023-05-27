import { useState } from 'react'
import './App.css'
import Navbar from './Components/navbar/Navbar'
import Feature1 from './Components/feature/Feature'
import Brand from './Components/brand/Brand'
import Cta from './Components/cta/Cta'

import {Possibility, Blog, Footer, Header, Whatgbt,Feature } from "./container"
export default function App(){
  return (
    <div className='App'>
      <div className="gradient__bg ">
        <Navbar/>
        <Header/>
      </div>
      <Brand/>
      <Whatgbt/>
      <Feature1/>
      <Possibility/>
      <Cta/>
      <Blog/>
      <Footer/>


    </div>
  )
}