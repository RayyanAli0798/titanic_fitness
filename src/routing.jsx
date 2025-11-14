import {Routes, Route} from "react-router";
import Home from "./pages/Home/Home";
import Auth from "./pages/Auth/Auth";
import Workouts from "./pages/Workouts/Workouts";
import ArticlePage from "./pages/ArticlePage/ArticlePage";


export default function Pages(){

    return(
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/workouts" element={<Workouts/>}/>
            <Route path="/auth" element={<Auth/>}/>
            <Route path="/article/:slug" element={<ArticlePage/>}/>

        </Routes>
    )

}