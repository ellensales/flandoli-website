import Stories from 'react-insta-stories';
import Story1 from '../../assets/images/stories1.png'

import "./styles.css"

export default function JobPreview(){

    function handleClick(){
        window.open("https://www.instagram.com/flandoligt/")
    }

    const stories = [
	{Story1},
    ]

    return(
        <div className="container-job-preview">
            <div className="text job-preview">
                <h1>Um pouco do nosso trabalho</h1>
                <button className="button-job-preview" onClick={handleClick}>Ver mais</button>
            </div>

            <div className="stories job-preview">
                <Stories stories={stories}/>
            </div>
        </div>
    )
}