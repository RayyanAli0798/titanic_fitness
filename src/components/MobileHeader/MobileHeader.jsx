import "./MobileHeader.css"
import logoImage from "../../assets/Logo.png"
import MenuIcon from "../../assets/MenuIcon.svg"
import { NavLink } from "react-router"
import { useState } from "react"
import { useUser } from "../../contexts/UserContexts"



export default function MobileHeader() {
    const [open, setOpen] = useState(false);
    const {user, logout}= useUser();
    
    function toggleOpen() {
        setOpen(!open)
    }

    let menuClassName = "menu-icon";
    if (open) {
        menuClassName = "menu-icon open"
    }

    const navMenu = <nav className="mobile-nav">
        <NavLink to="/" className="nav-link">Home</NavLink>
        <NavLink to="/workouts" className="nav-link">Workouts</NavLink>
        {
            user ? <button className="nav-link primary-btn" onClick={logout}> Logout </button> : <NavLink to="/auth" className="nav-link primary-btn">Join</NavLink>
        }
    </nav>

    
    return (
        <header className="mobile-Header">
            <div className="logo">
                <img src={logoImage} alt="titanic fitness logo" />
                <h1>TITANIC FITNESS</h1>
            </div>

            <img onClick={toggleOpen} className={menuClassName} src={MenuIcon} alt="MobileMenuIcons" />


            {open ? navMenu : null}

        </header>
    )
}