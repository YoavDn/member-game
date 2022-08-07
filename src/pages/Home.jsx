import React from "react"
import { useHistory } from "react-router-dom";
import logo from '../../assets/images/Member_Berries.png'




const Home = () => {
    const history = useHistory()
    const goToGame = () => history.push("/game")
    return (
        <div className="home-page">
            <img className="hero-img" src={logo} alt="" />
            <h2 className="hero-subtitle" >Think you have a good memory ?</h2>
            <button className="main-play-btn" onClick={goToGame}>PLAY</button>
        </div>
    )
}

export default Home