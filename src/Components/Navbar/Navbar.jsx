import React from 'react';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Navbar.css';
import { Link } from 'react-router-dom';
export default function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary ">
        <div className="container ">
          <a className="navbar-brand" href="#">Product</a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" >
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
                <Link className="nav-link"  to={'/Products'}>Products</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link"  to={'/'}>Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={'/Category'}>Category</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={'/Create'}>Create</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={'/Qutes'}>Qutes</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
