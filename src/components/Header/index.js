import LogoHeader from "../../assets/images/Logo_Flandoli_10 1.png"
import LinkedinLogo from "../../assets/images/linkedin 1.png"
import InstaLogo from "../../assets/images/instagram (1) 1.png"
import { useLocation, useNavigate } from "react-router-dom"
import { useState } from "react"
import React from "react"
import "./styles.css"

export default function Header(){
    const navigate = useNavigate();
    const location = useLocation(); 

    return(
        <div className="header">
            <div className="logo-header"><img src={LogoHeader}/></div>
            <div className="container-links-header">
                <ul className="ul-header">
                    <li className={location.pathname === '/' ? 'link-header on' : 'link-header'} onClick={ () => {navigate("/"); }} >Home</li>
                    <li className={location.pathname === '/casting' ? 'link-header on' : 'link-header'} onClick={ () => {navigate("/casting"); }}>Casting</li>
                    <li className={location.pathname === '/jobs' ? 'link-header on' : 'link-header'} onClick={ () => {navigate("/jobs"); }}>Trabalhos</li>
                    <li className={location.pathname === '/brands' ? 'link-header on' : 'link-header'} onClick={ () => {navigate("/brands"); }}>Marca</li>
                    <li className={location.pathname === '/contact' ? 'link-header on' : 'link-header'} onClick={ () => {navigate("/contact"); }}>Contato</li>
                </ul>
            </div>
            <div className="contact-header">
                <img src={LinkedinLogo} alt="Linkedin" onClick={ () => {window.open("https://www.linkedin.com/company/flandoli/")}}/>
                <img src={InstaLogo} alt="Instagram" onClick={ () => {window.open("https://www.instagram.com/flandoligt/")}}/>
            </div>
        </div>
    )
}