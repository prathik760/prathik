 import React from 'react'
 import Onboarding from './Components/Onboarding'
import {  HashRouter, Route, Routes } from 'react-router-dom'
import Home from './Components/Home'
import Dashboard from './Components/Dashboard'
import Chat from './Components/Chat'
import Messaging from './Components/Messaging'
 
 
 const App = () => {
   return (
     <>
      <HashRouter>
        <Routes>
         <Route path='/' element = {<Home />}></Route>
         <Route path='/Dashboard' element = {<Dashboard />}></Route>
         <Route path='/Onboarding' element = {<Onboarding />}></Route>
         <Route path='/Chat' element = {<Chat />}></Route>
         <Route path='/Chat' element = {<Messaging />}></Route>
          

        </Routes>
      </HashRouter>  
     </>
   )
 }
 
 export default App