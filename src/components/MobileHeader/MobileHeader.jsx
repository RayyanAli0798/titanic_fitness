import "./MobileHeader.css"
import logoImage from "../../assets/Logo.png"
import MenuIcon from "../../assets/MenuIcon.svg"
import { NavLink } from "react-router"
import { useState } from "react"



export default function MobileHeader() {
    const [open, setOpen] = useState(false);
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
        <NavLink to="/auth" className="nav-link primary-btn">Join</NavLink>
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