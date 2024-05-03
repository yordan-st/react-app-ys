import appLogo from '../assets/airbnb-logo.svg'

export default function Navbar() {
    return (
        <nav>
            <img src={appLogo} className="logo" alt="AirBnB logo" />
        </nav>
    )
}