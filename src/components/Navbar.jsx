// import appLogo from '../assets/airbnb-logo.svg'
// import { Outlet, Link } from "react-router-dom";
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
        <nav>
            <ul>
                <li>
                <Link to="/">Home</Link>
                </li>
                <li>
                <Link to="/airbnb">Airbnb</Link>
                </li>
                <li>
                <Link to="/meme">Meme</Link>
                </li>
            </ul>
        </nav>
  );
}