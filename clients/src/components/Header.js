import React from 'react'
import { Link } from 'react-router-dom'

import '../css/style.css';

// The Header creates links that can be used to navigate
// between routes.
const Header = () => (
  <header>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <a className="navbar-brand" href="#">More Recipes</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
      
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
               <Link className="nav-link" to='/'>Home</Link> <span className="sr-only">(current)</span>
            </li>
            <li className="nav-item">
            <Link className="nav-link" to='/recipes'>Recipes</Link>
            </li>
          </ul>
          <form className="form-inline my-2 my-lg-0">
            <input className="form-control mr-sm-2" type="email" placeholder="Email" aria-label="Email" />
            <input className="form-control mr-sm-2" type="password" placeholder="Password" aria-label="Password" />
            <button className="btn btn-primary my-2 my-sm-0" type="submit">Sign In</button>
          </form>
        </div>
    </nav>
  </header>
)

export default Header
