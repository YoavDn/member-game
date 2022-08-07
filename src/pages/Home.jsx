import React from "react"
import { Link } from "react-router-dom";
import logo from '../assets/images/Member_Berries.png'




const Home = () => {
    return (
        <div className="home-page main-view" >
            <h2 className="hero-subtitle" >Think you have a Good Memory ?</h2>
            <img className="hero-img" src={logo} alt="" />

            <Link to='/game'><button className="main-play-btn">Play</button></Link>
        </div >
    )
}

export default Home