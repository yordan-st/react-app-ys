import { NavLink } from 'react-router-dom';
import './navbar.css'

export default function Navbar() {
  return (
    <>
      <nav>
        <NavLink to="/" exact className="nav-item" activeClassName="active">
            <i className="bi bi-file-person-fill"></i>
            <div className="tooltip-top">
                <div className="tooltip-text">
                    <p>Home</p>
                </div>
            </div>          
        </NavLink>
        <NavLink to="/airbnb" className="nav-item" activeClassName="active">
            <i className="bi bi-person-workspace"></i>
            <div className="tooltip-top">
                <div className="tooltip-text">
                    <p>Projects</p>
                </div>
            </div>   
        </NavLink>
        <NavLink to="/about" className="nav-item" activeClassName="active">
            <i className="bi bi-mortarboard-fill"></i>
            <div className="tooltip-top">
                <div className="tooltip-text">
                    <p>About</p>
                </div>
            </div>   
        </NavLink>
        <NavLink to="/contact" className="nav-item" activeClassName="active">
            <i className="bi bi-cup-hot-fill"></i>
            <div className="tooltip-top">
                <div className="tooltip-text">
                    <p>Contact</p>
                </div>
            </div>   
        </NavLink>
    </nav>
    <div className="blur"></div>
    </>
  );
}