import "./DesktopHeader.css"
import LogoImg from "../../assets/logo.png"
import { NavLink } from "react-router"
import {useUser } from "../../contexts/UserContexts"
export default function DesktopHeader() {

    const {user, logout}= useUser();
    return (
        <div className="desktop-header">
            <div className="logo">
                <img src={LogoImg} alt="titanic fitness logo" />
                <h1>TITANIC FITNESS</h1>
            </div>
            <nav>
                <NavLink to="/" className="nav-link">Home</NavLink>
                <NavLink to="/workouts" className="nav-link">Workouts</NavLink>
                
                {
                    user ? <button className="nav-link primary-btn" onClick={logout}> Logout </button>: <NavLink to="/auth" className="nav-link primary-btn">Join</NavLink>
                }
            </nav>
        </div>
    )
}