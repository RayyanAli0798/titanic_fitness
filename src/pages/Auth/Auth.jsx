import "./Auth.css"
import HeroBannner from "../../components/HeroBanner/HeroBanner"
import AuthImage1 from "../../assets/AuthBanner_01.png"
import { useState } from "react"

import { useContext } from "react"
import { UserContext } from "../../contexts/UserContexts"



function LoginForm({ toggle }) {

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    
    return (
        <form className="authForm">
            
            <h1 className="AuthTitle"> Unsinkable Gains await </h1>
            <div className="InputBoxsForAuthPage">
                <input className="InputBoxForAuth" value={email} onChange={(e) => setEmail(e.target.value)} type="email" minLength={12} required placeholder="Email" />
                <input className="InputBoxForAuth" value={password} onChange={(e) => setPassword(e.target.value)}  type="text" minLength={8} required placeholder="Password" />
                
            </div>

            <div className="ButtonsArea">
                <button className="ProceedBtnForAuthPage"> LOGIN </button>
                <div className="smallTextAreaAuthPage">
                    <p> Dont have an account?</p>
                    <button onClick={toggle} className="ChangeBtn"> Register </button>
                </div>

            </div>
        </form>
    )
}
function RegisterForm({ toggle }) {

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [email, setEmail] = useState("")

    const {user,login} = useContext(UserContext);

    function registerUser(){
        login({
            "username":"man",
            "email":"fjfjfj@gmail.com"
            
        })
    }

    return (
        <form className="authForm" onSubmit={registerUser}>

            <h1 className="AuthTitle"> Unsinkable Gains await </h1>
                {user ? <h1> Logged in user: {user.username} </h1> : null}
            <div className="InputBoxsForAuthPage" >
                <input value={email} onChange={(e) => setEmail(e.target.value)} className="InputBoxForAuth" type="email" minLength={12} required placeholder="Email" />
                <input value={password} onChange={(e) => setPassword(e.target.value)}      className="InputBoxForAuth" type="text" minLength={8} required placeholder="Password" />
                <input value={username} onChange={(e) => setUsername(e.target.value)} className="InputBoxForAuth" type="text" minLength={3} required placeholder="Display Name" />
            </div>

            <div className="ButtonsArea">
                <button className="ProceedBtnForAuthPage"> REGISTER NOW </button>
                <div className="smallTextAreaAuthPage">
                    <p> Already have an account?</p>
                    <button className="ChangeBtn" onClick={toggle}> Login  </button>
                </div>

            </div>
        </form>
    )
}


export default function Auth() {
    const [registerForm, setRegisterForm] = useState(true)
    function toggleForm() {
        setRegisterForm(!registerForm);
    }


    return (
        <div className="authLayout">
            <HeroBannner image={AuthImage1} />
            <div className="AuthFormColumn">
                {registerForm ? <RegisterForm toggle={toggleForm} /> : <LoginForm toggle={toggleForm} />}

            </div>
        </div>
    )
}