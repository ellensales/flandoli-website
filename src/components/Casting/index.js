import Influencer from "../Influencer"
import Bruno from "../../assets/images/Influencers/Bruno.png"
import Biricuticus from "../../assets/images/Influencers/Biricuticus.png"
import GoHanGo from "../../assets/images/Influencers/Gohango.png"
import Thalz from "../../assets/images/Influencers/Thalz.png"
import "./styles.css"

export default function Casting(){
    return(
        <div className="container-casting">
            <h1>Nosso Casting</h1>
            <div className="categories-casting">
                <li>
                    <ul>Todos</ul>
                    <ul>Gastronomia</ul>
                    <ul>Humor</ul>
                    <ul>Lifestyle</ul>
                </li>
            </div>
            <div className="influencers">
                <Influencer img={Bruno} name="Bruno" category="gastronomia"/>
                <Influencer img={Biricuticus} name="Biricuticus" category="gastronomia"/>
                <Influencer img={GoHanGo} name="GohanGo" categoria="gastronomia"/>
                <Influencer img={Thalz} name="Thalz" categoria="humor"/>
            </div>
        </div>
    )
}