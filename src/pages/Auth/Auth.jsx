import "./Auth.css"
import HeroBannner from "../../components/HeroBanner/HeroBanner"
import AuthImage1 from "../../assets/AuthBanner_01.png"
import { useState } from "react"

// import { useContext } from "react"
// import { UserContext } from "../../contexts/UserContexts"
import { useUser } from "../../contexts/UserContexts"
import axios from "axios"



function LoginForm({ toggle }) {

    const [password, setPassword] = useState("")
    const [email, setEmail] = useState("")
    const [error, setError] = useState("")

    const { login } = useUser()

    function loginUser(event) {
        event.preventDefault()
        const endpoint = "http://127.0.0.1:8002/auth/login";

        axios.post(endpoint, {
            "password": password,
            "email": email
        })
            .then(res => {

                login(res.data)
            })
            .catch(err => {
                setError(err?.response?.data?.detail || "Error occured")
            })
    }

    return (
        <form className="authForm" onSubmit={loginUser}>

            <h1 className="AuthTitle"> Unsinkable Gains await </h1>
            <div className="InputBoxsForAuthPage">
                <input className="InputBoxForAuth" value={email} onChange={(e) => setEmail(e.target.value)} type="email" minLength={12} required placeholder="Email" />
                <input className="InputBoxForAuth" value={password} onChange={(e) => setPassword(e.target.value)} type="text" minLength={8} required placeholder="Password" />
                {error ? <p>{error} </p> : null}
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
    const [error, setError] = useState("")

    const { login } = useUser()

    function registerUser(event) {
        event.preventDefault()
        const endpoint = "http://127.0.0.1:8002/auth/register";

        axios.post(endpoint, {
            "username": username,
            "password": password,
            "email": email
        })
            .then(res => {

                login(res.data)
            })
            .catch(err => {
                setError(err?.response?.data?.detail || "Error occured")
            })

    }

    return (
        <form className="authForm" onSubmit={registerUser}>

            <h1 className="AuthTitle"> Unsinkable Gains await </h1>
            <div className="InputBoxsForAuthPage" >
                <input value={email} onChange={(e) => setEmail(e.target.value)} className="InputBoxForAuth" type="email" minLength={12} required placeholder="Email" />
                <input value={password} onChange={(e) => setPassword(e.target.value)} className="InputBoxForAuth" type="text" minLength={8} required placeholder="Password" />
                <input value={username} onChange={(e) => setUsername(e.target.value)} className="InputBoxForAuth" type="text" minLength={3} required placeholder="Display Name" />
                {error ? <p>{error} </p> : null}
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