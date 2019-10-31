import React from 'react'
import { NavLink } from 'react-router-dom'
import '../cssFiles/navBar.css'
 
const Navbar = () => (
  <nav className="menu">
    <ul className="main">
      <li className="homelogo"><NavLink exact to="/">Home</NavLink></li>
      <li className="descriptionlogo"><NavLink exact to="/CompanyDescription">Company Description</NavLink></li>
      <li className="Companylistlogo"><NavLink exact to="/CompanyList">Stock Company List</NavLink></li>
    </ul>
  </nav>
)

 
export default Navbar