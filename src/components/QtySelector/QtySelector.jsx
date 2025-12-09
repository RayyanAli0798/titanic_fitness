import "./QtySelector.css"

export default function QtySelector({ num, setNum, unit, step }) {

    function increase() {
        setNum(num + step)
    }
    function decrease() {
        setNum(Math.max(num - step, 0))
    }


    return (
        <div className="qty-selector">
            <button className="primary-btn" onClick={decrease} > - </button>

            <input value={`${num} ${unit}`} required />
            <button className="primary-btn" type="button" onClick={() => setNum(num + step)}> + </button>


        </div>
    )
}