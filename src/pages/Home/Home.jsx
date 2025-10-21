import "./Home.css"
import HeroBanner from "../../components/HeroBanner/HeroBanner"
import BannerImage from "../../assets/hero_banner.png"
import BackgroundlessSeperater from "../../components/BackgroundlessSeperater/BackgroundlessSeperater"
import BenifitsBox from "../../components/BenifitsBox/BenifitsBox"
import IceburgBooksSction from "../../components/IceburgBooksSction/IceburgBooksSction"

export default function Home() {
    return (
        <>
            <HeroBanner image={BannerImage}>
                <h1>UNSINKABLE GAINS</h1>
                <h2>Crash through your fitness goals</h2>
            </HeroBanner>

            <BackgroundlessSeperater text="Let the benifits sink in"/>

            <BenifitsBox/>
            <IceburgBooksSction
            title="Test"
            desc="Test desc"
            link="/"/>
        </>
    )
}