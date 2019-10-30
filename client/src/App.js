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
      <Route exact path="/CompanyDescription" component={CompanyDescription} />
      <Route path="/CompanyList" component={CompanyList} />
    </Switch>
  </BrowserRouter>
)

export default App
