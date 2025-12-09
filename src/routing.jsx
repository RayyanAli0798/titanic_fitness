import {Routes, Route, Navigate} from "react-router";
import Home from "./pages/Home/Home";
import Auth from "./pages/Auth/Auth";
import Workouts from "./pages/Workouts/Workouts";
import ArticlePage from "./pages/ArticlePage/ArticlePage";
import { useUser } from "./contexts/UserContexts";



export default function Pages(){
    const {user} = useUser();
    return(
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/workouts" element={user ? < Workouts/>: <Navigate to="/auth" replace/>}/>
            <Route path="/auth" element={<Auth/>}/>
            <Route path="/article/:slug" element={<ArticlePage/>}/>

        </Routes>
    )

}