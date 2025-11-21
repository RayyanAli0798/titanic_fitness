import "./ArticleBox.css"
import { Link } from "react-router"


export default function ArticleBox({ title, description, link }) {
   
    return (
        <div className="articleThumb">
            <p className="ArticleBoxTitle"> {title} </p>
            <p className="ArticleBoxDesc"> {description} </p>
            <Link to={link} className="ArticleLink"> Read more </Link>
        </div>
    )
}