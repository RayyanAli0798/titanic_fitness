import { useParams } from "react-router"
import "./ArticlePage.css"
import { useEffect, useState } from "react";
import axios from "axios";

export default function ArticlePage() {
    const { slug } = useParams();
    const URL = `http://127.0.0.1:8002/public/articles/${slug}`
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState();
    const [article, setArticle] = useState();

    function loadArticle(){
        axios.get(URL)
        .then(res => {
            setLoading(false)
            setArticle(res.data)
        })
        .catch(err => {
            setError(err?.response?.data?.detail || "Error occured")
            setLoading(false);
        })
    }

    useEffect(loadArticle, []);

    let articleDisplay = null;
    if (loading){
        articleDisplay = <h1> Article Loading.. </h1>

    }else if (error){
        articleDisplay = <h1>Error</h1>
    } else{
        articleDisplay = <div dangerouslySetInnerHTML={{__html: article.content_html}} />
    }

    return (
        <>

            <div className="article-content">
                {articleDisplay}
            </div>
        </>
    )
}