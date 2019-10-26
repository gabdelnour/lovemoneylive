import React from 'react'
import { BrowserRouter, Switch, Route } from "react-router-dom"
import './App.css'
import Home from './pages/Home'
import Navbar from './components/Navbar'
import CompanyList from './pages/CompanyList'
import CompanyDescription from './pages/CompanyDescription'



const App = () => (
  <BrowserRouter>
    <Navbar/>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/Companies" component={CompanyList} />
      <Route path="/CompanyList/:ticker" component={CompanyDescription} />
    </Switch>
  </BrowserRouter>
)

export default App
