import React from 'react'
import { NavLink } from 'react-router-dom'
 
const Navbar = () => (
  <nav className="nav">
    <ul className="ul">
      <li className="list"><NavLink exact to="/">Home</NavLink></li>
      <li className="list"><NavLink exact to="/CompanyDescription">Company Description</NavLink></li>
      <li className="list"><NavLink exact to="/CompanyList">Stock Company List</NavLink></li>
    </ul>
  </nav>
)
 
export default Navbar
 
