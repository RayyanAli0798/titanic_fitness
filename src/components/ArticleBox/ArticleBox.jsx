import "./ArticleBox.css"

export default function ArticleBox({title,desc,link}){
    return(
        <div className="articleThumb"> 
        <p className="ArticleBoxTitle"> {title} </p> 
        <p className="ArticleBoxDesc"> {desc} </p>
        <a href={link} className="ArticleLink"> Read more </a>
        
        </div>
    )
}