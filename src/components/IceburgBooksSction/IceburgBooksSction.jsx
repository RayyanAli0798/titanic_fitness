import "./IceburgBooksSction.css"
import ArticleBox from "../ArticleBox/ArticleBox"

import axios from "axios";
import { useState } from "react"


export default function IceburgBooksSction() {


    const [articleData, setArticleData] = useState([]);
    const thumbUrl = "http://localhost:8002/public/articles";

    function loadThumbNails(){
        axios.get(thumbUrl)
        .then((res) => {
            // this is the code that runs when we get a good response
            alert(JSON.stringify(res)) 
        })
        .catch((err) => {
            //code that runs when something goes wrong
            alert(err) 
        })
    }

    loadThumbNails()

    return (
        <>
            <div className="TitleOfIceburg">
                <h1 className="IceBurgTitle"> Gym is the tip of the iceberg </h1>
                <div className="LineBoxForIceberg"> </div>
                <h2 className="IceBurgTitle"> Hit the books </h2>
            </div>

            <div className="ArticlesSection">
                <ArticleBox title="djdj" desc="lorem" link="fggg" />
                <ArticleBox title="djdj" desc="lorem" link="fdn" />
                <ArticleBox title="djdj" desc="lorem" link="fdn" />
                <ArticleBox title="djdj" desc="lorem" link="fdn" />
                <ArticleBox title="djdj" desc="lorem" link="fdn" />
                <ArticleBox title="djdj" desc="lorem" link="fdn" />
            </div>



        </>
    )
}