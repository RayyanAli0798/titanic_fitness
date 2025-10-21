import "./DesktopHeader.css"
import LogoImg from "../../assets/logo.png"
import { NavLink } from "react-router"

export default function DesktopHeader() {
    return (
        <div className="desktop-header">
            <div className="logo">
                <img src={LogoImg} alt="titanic fitness logo" />
                <h1>TITANIC FITNESS</h1>
            </div>
            <nav>
                <NavLink to="/" className="nav-link">Home</NavLink>
                <NavLink to="/workouts" className="nav-link">Workouts</NavLink>
                <NavLink to="/auth" className="nav-link primary-btn">Join</NavLink>
            </nav>
        </div>
    )
}