import FounderImage from "../../assets/images/matheusMAY_0080.png"
import "./styles.css"

export default function About(){
    return(
        <div className="container-about">
            <div className="image-about">
                <img src={FounderImage} alt="Matheus Flandoli"/>
                <p>Matheus Flandoli, founder.</p>
            </div>

            <div className="text-about">
                <h1>Quem somos</h1>
                <p className="description-about">
                A Flandoli foi criada em 2022 visando construir histórias entre marcas e pessoas de forma natural. Buscamos criar conexões verdadeiras entre talentos e marcas, que transcendem o simples empréstimo de imagem e resultam em genuínas cocriações. Existimos para potencializar o relacionamento entre marcas e personalidades na geração de novos negócios. Criamos pontes para que as marcas possam participar das iniciativas dos artistas, respeitando seus objetivos de carreira e impulsionando para novos patamares comerciais e artísticos.
                </p>
        </div>
        </div>
    )
}