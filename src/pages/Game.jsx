import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from 'react-router'
import MemberCard from "../components/MemberCard";

const cardsObj = [
    {
        name: 'Joey',
        isOpen: false,
        imgUrl: 'https://res.cloudinary.com/soundwave-4/image/upload/v1659879064/qsm9dl3yggbijdnvcibf.jpg',
    },
    {
        name: 'Yoshi',
        isOpen: false,
        imgUrl: 'https://res.cloudinary.com/soundwave-4/image/upload/v1659879153/xeahnihibj436ncnyqsf.jpg',
    },
    {
        name: 'Sina',
        isOpen: false,
        imgUrl: 'https://res.cloudinary.com/soundwave-4/image/upload/v1659881108/ux7tpfpympwyeedigsjh.png'
    },
]





const Game = () => {
    const [cards, setCards] = useState([])

    const suffleCards = () => {
        const suffleCards = [...cardsObj, ...cardsObj]
            .sort(() => Math.random() - .5).map(card => ({ ...card, id: Math.random() }))

        setCards(suffleCards)
    }

    useEffect(() => {
        suffleCards()
    }, [])


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