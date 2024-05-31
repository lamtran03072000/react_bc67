import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

export default class HeaderPage extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink
                  className={({ isActive }) => {
                    return isActive ? 'nav-link bg-danger' : 'nav-link';
                  }}
                  aria-current="page"
                  to="/demo"
                >
                  demo router
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink
                  className={({ isActive }) => {
                    return isActive ? 'nav-link bg-danger' : 'nav-link';
                  }}
                  aria-current="page"
                  to="/bt-gio-hang"
                >
                  Bài tập giỏ hàng
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className={({ isActive }) => {
                    return isActive ? 'nav-link bg-danger' : 'nav-link';
                  }}
                  aria-current="page"
                  to="/ex-view-detail"
                >
                  Bài tập xem chi tiết
                </NavLink>
              </li>

              {/* <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Dropdown
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <a className="dropdown-item" href="#">
                      Action
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Another action
                    </a>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Something else here
                    </a>
                  </li>
                </ul>
              </li> */}
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}
