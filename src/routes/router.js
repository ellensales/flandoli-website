import React from "react";
import {Route, Routes} from 'react-router-dom'
import Home from "../pages/Home";
import CastingPage from "../pages/CastingPage";
import Brands from "../pages/Brands";
import Contact from "../pages/Contact";
import Jobs from "../pages/Jobs";

export default function Router(){
    return (
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/casting" element={<CastingPage/>}/>
            <Route path="/brands" element={<Brands/>}/>
            <Route path="/contact" element={<Contact/>}/>
            <Route path="/jobs" element={<Jobs/>}/>
        </Routes>
    )
}