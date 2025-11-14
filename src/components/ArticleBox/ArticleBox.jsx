import "./ArticleBox.css"
import { Link } from "react-router"


export default function ArticleBox({ title, desc, link }) {
   
    return (
        <div className="articleThumb">
            <p className="ArticleBoxTitle"> {title} </p>
            <p className="ArticleBoxDesc"> {desc} </p>
            <Link to={link} className="ArticleLink"> Read more </Link>
        </div>
    )
}