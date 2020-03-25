import React from 'react'

const Header = () => (
  <nav className="navbar navbar-expand-lg navbar-light ">
    <a className="navbar-brand goog" href="index.html">O-Sale</a>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>

    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ml-auto">
        <li className="nav-item">
          <a className="nav-link" href="index.html">Home <span className="sr-only">(current)</span></a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="new-item.html">New Product</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="login.html">Sign In</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="register.html">Sign Up</a>
        </li>
      </ul>
    </div>
  </nav>
)


export default Header
