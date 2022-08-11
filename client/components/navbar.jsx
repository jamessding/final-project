import React from 'react';

export default function Navbar(props) {
  return (
    <nav className="navbar navbar-dark bg-theme">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          <img src="/favicon-32x32.png" alt="" className="d-inline-block align-text-top" />
            Bobafy
        </a>
        <button className="menu-button" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">
          <i className="fa-solid fa-bars fa-2xl text-light"></i>
        </button>

        <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
          <div className="offcanvas-header">
            <h2 id="offcanvasRightLabel">Menu</h2>
            <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
          </div>
          <div className="offcanvas-body">
            <h5 className='mb-3'>Activity</h5>
            <h5 className='mb-3'>Settings</h5>
            <h5 className='mb-3'>Sign Out</h5>
          </div>
        </div>
      </div>
    </nav>
  );
}
