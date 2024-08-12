import React from 'react';
import '../styles/Navbar.css';
import { Link } from 'react-router-dom';

// 1. style attribute margin: 20px
// 2. className styles
// 3. <style> styles in html
// 4. Bootstrap styles in className m-1

function Navbar({ title }) {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <Link to="/" className='navbar-brand'>{title}</Link>
        {/* <a className="navbar-brand" href="/">{title}</a> */}
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">About</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/recommend">Recommend</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/top">Top</Link>
            </li>
            <li className="nav-item">
              <a href='/' className="nav-link disabled" aria-disabled="true">Disabled</a>
            </li>
          </ul>
          <form className="d-flex" role="search">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
            <button className="btn btn-outline-success" type="submit">Search</button>
          </form>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
