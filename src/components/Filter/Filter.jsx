import axios from "axios"
import "./Filter.css"
import { useState, useEffect } from "react"


export default function Filter({ filter, setFilter }) {

    const [categories, setCategories] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState()

    function loadCategories() {
        const url = "https://wger.de/api/v2/exercisecategory/"
        axios.get(url)
            .then(res => {
                setCategories([
                    {"id":0,"name":"All"},
                    ...res.data.results])
                setLoading(false)

            })
            .catch(err => {
                alert("Error")
                setLoading(false);

            })
    }
    useEffect(loadCategories, [])

    let catButtons = categories.map(cat => <button
        onClick={() => setFilter(cat.id)} type="button" className={`filter-btn ${filter == cat.id ? "active" : ""} `}>{cat.name}</button>)
    if (loading) {
        return <div className="filters"> Filters Loading...</div>
    }
    if (error) {
        return <div className="filters"> Filters Loading...</div>
    }

    

    return (
        <div className="filter">
            Filter:
            <div className="filter-btns">
                {catButtons}

            </div>
        </div>
    )
}