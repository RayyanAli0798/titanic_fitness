import "./Auth.css"
import HeroBannner from "../../components/HeroBanner/HeroBanner"
import AuthImage1 from "../../assets/AuthBanner_01.png"
import { useState } from "react"



function LoginForm({ toggle }) {
    return (
        <form className="authForm">
            
            <h1 className="AuthTitle"> Unsinkable Gains await </h1>
            <div className="InputBoxsForAuthPage">
                <input className="InputBoxForAuth" type="email" minLength={12} required placeholder="Email" />
                <input className="InputBoxForAuth" type="text" minLength={8} required placeholder="Password" />
                
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
    return (
        <form className="authForm">

            <h1 className="AuthTitle"> Unsinkable Gains await </h1>
            <div className="InputBoxsForAuthPage">
                <input className="InputBoxForAuth" type="email" minLength={12} required placeholder="Email" />
                <input className="InputBoxForAuth" type="text" minLength={8} required placeholder="Password" />
                <input className="InputBoxForAuth" type="text" minLength={3} required placeholder="Display Name" />
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