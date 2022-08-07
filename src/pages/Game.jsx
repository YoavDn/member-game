import React from "react";
import { Link } from 'react-router'
import MemberCard from "../components/MemberCard";

const cards = [
    {
        id: 1,
        name: 'Joey',
        isOpen: false,
        imgUrl: 'https://res.cloudinary.com/soundwave-4/image/upload/v1659879064/qsm9dl3yggbijdnvcibf.jpg',
    },
    {
        id: 3,
        name: 'Yoshi',
        isOpen: false,
        imgUrl: 'https://res.cloudinary.com/soundwave-4/image/upload/v1659879153/xeahnihibj436ncnyqsf.jpg',
    },
    {
        id: 3,
        name: 'Sina',
        isOpen: false,
        imgUrl: 'https://res.cloudinary.com/soundwave-4/image/upload/v1659879045/lbomlmmcb9hylx4ziug0.png'
    }
]

const Game = () => {
    return (
        <div className="game-page main-view">
            <h2 className="game-title" >Memeber</h2>
            <div className="cards-list">
                {cards.map(card => (
                    <MemberCard key={card.id} card={card} />
                ))}
            </div>
        </div>
    )
}

export default Game