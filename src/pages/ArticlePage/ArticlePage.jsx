import { useParams } from "react-router"
import "./ArticlePage.css"

export default function ArticlePage() {
    const { slug } = useParams();


    return (
        <>

            <div className="article-content">
                This is an articles
            </div>
        </>
    )
}