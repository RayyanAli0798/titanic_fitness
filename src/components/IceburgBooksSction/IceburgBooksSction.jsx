import "./IceburgBooksSction.css"
import ArticleBox from "../ArticleBox/ArticleBox"




export default function IceburgBooksSction() {
    return (
        <>
            <div className="TitleOfIceburg"> 
                <h1 className="IceBurgTitle"> Gym is the tip of the iceberg </h1>
                <div className="LineBoxForIceberg"> </div>
                <h2 className="IceBurgTitle"> Hit the books </h2>
            </div>

            <div className="ArticlesSection">
                <ArticleBox title="djdj" desc="lorem" link="fdn" />
                <ArticleBox title="djdj" desc="lorem" link="fdn" />
                <ArticleBox title="djdj" desc="lorem" link="fdn" />
                <ArticleBox title="djdj" desc="lorem" link="fdn" />
                <ArticleBox title="djdj" desc="lorem" link="fdn" />
                <ArticleBox title="djdj" desc="lorem" link="fdn" />
            </div>

            

        </>
    )
}