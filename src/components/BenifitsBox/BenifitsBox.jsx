import "./BenifitsBox.css"
import treadmill from "../../assets/treadmill.png"
import Notepad from "../../assets/notepad.png"
import clock from "../../assets/clock.png"

export default function BenifitsBox() {

    return (
        <div className="benifitBox">

            <div className="BenifitsBox1">
                <img src={treadmill} />
                <h3>  State of the art equipment</h3>
            
            </div>

            <div className="BenifitsBox1">

                <h3>  24/7 answers </h3>
                <img src={clock} />


            </div>

            <div className="BenifitsBox1 long">
                <img src={Notepad} />
                <h3>  Detailed note keeping </h3>


            </div>


        </div>
    )
}