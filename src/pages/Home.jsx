import React from "react"
import { Link } from "react-router-dom";
import logo from '../assets/images/Member_Berries.png'




const Home = () => {
    return (
        <div className="home-page main-view" >
            <img className="hero-img" src={logo} alt="" />
            <h2 className="hero-subtitle" >Think you have a good memory ?</h2>

            <Link to='/game'><button className="main-play-btn">PLAY</button></Link>
        </div >
    )
}

export default Home