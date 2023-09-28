import FooterLogo from "../../assets/images/Logo_Flandoli_09 1.png"
import LogoInsta from "../../assets/images/instagram (1) 1.png"
import LogoLinked from "../../assets/images/linkedin 1.png"
import LogoWhats from "../../assets/images/whatsapp.png"
import LogoEmail from "../../assets/images/email.png"
import "./styles.css"

export default function Footer(){
    return(
        <div className="footer-container">
            <div className="img-footer"><img src={FooterLogo} alt="Flandoli"/></div>

            <div className="links-footer">
                <p>Contatos</p>
                <div>
                    <img src={LogoInsta} alt="Instagram"/>
                    <img src={LogoLinked} alt="Linkedin"/>
                    <img src={LogoWhats} alt="Whatsapp"/>
                    <img src={LogoEmail} alt="Email"/>
                </div>
            </div>
        </div>
    )
}