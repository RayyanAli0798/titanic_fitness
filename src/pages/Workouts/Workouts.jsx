import "./Workouts.css"
import axios from "axios"
import { useState, useEffect } from "react"
import { useUser } from "../../contexts/UserContexts";
import QtySelector from "../../components/QtySelector/QtySelector";
import Filter from "../../components/Filter/Filter";


export default function Workouts() {
    // const api_endpoint = "https://wger.de/api/v2/exercisecategory/"

    const { user } = useUser();
    const [kg, setKg] = useState(50);
    const [reps, setReps] = useState(5);
    const [selectedExercise, setSelectedExercise] = useState();
    const [date, setDate] = useState();
    

    const [filter, setFilter] = useState(0);
    const [loadedExercises, setLoadedExercise] = useState(["fake exercise", "second"])

    const exerciseOptions = loadedExercises.map(ex => <option value={ex}> {ex} </option>)

    return (
        <>
            <div className="workoutsPage">

                <Filter filter={filter} setFilter={setFilter}/>
                This is the workoutsPage
                <form>
                    <select className="exerciseDropdown"
                        required
                        onChange={(e) => setSelectedExercise(e.target.value)}
                        value={selectedExercise}>
                        {exerciseOptions}
                    </select>

                    <input type="date" required onChange={(e) => setDate(e.target.value)} value={date} />
                    {date}

                    <button type="submit" className="primary-btn"> Add </button>
                </form>

                <QtySelector num={kg} unit={"KG"} setNum={setKg} step={5} />
                <QtySelector num={reps} unit={"Reps"} setNum={setReps} step={1} />
            </div>
        </>
    )
}