import "./IceburgBooksSction.css"
import ArticleBox from "../ArticleBox/ArticleBox"
import axios from "axios";
import { useState, useEffect } from "react"


export default function IceburgBooksSction() {

    const [articleData, setArticleData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState()
    const thumbUrl = "http://localhost:8001/public/articles";

    function loadThumbNails() {
        axios.get(thumbUrl)
            .then((res) => {
                // this is the code that runs when we get a good response
                // alert(JSON.stringify(res))
                setArticleData(res.data)
                setLoading(false)
            })
            .catch((err) => {
                setError(err?.response?.data?.detail || "Error occured")
                setLoading(false) 
            })
    }

    // loadThumbNails();

    useEffect(() => {
        loadThumbNails();

    }, [])

    let articles = null;
    if (loading) {
        articles= <h1> Loading articles... </h1>
    }
    else if(error){
        articles= <h1> Errors articles... </h1>
    }
    else{
        articles = articleData.map(thumb => {
            return(
                <ArticleBox title={thumb.title} description = {thumb.description} link ={thumb.link}/>
            )
        })
    }




    return (
        <>
            <div className="TitleOfIceburg">
                <h1 className="IceBurgTitle"> Gym is the tip of the iceberg </h1>
                <div className="LineBoxForIceberg"> </div>
                <h2 className="IceBurgTitle"> Hit the books </h2>
            </div>

            <div className="ArticlesSection">
                {articles} 
            </div>



        </>
    )
}