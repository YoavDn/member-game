import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from 'react-router'
import MemberCard from "../components/MemberCard";

const cardsObj = [
    {
        name: 'Joey',
        imgUrl: 'https://res.cloudinary.com/soundwave-4/image/upload/v1659879064/qsm9dl3yggbijdnvcibf.jpg',
        matched: false
    },
    {
        name: 'Yoshi',
        imgUrl: 'https://res.cloudinary.com/soundwave-4/image/upload/v1659879153/xeahnihibj436ncnyqsf.jpg',
        matched: false
    },
    {
        name: 'Sina',
        imgUrl: 'https://res.cloudinary.com/soundwave-4/image/upload/v1659881108/ux7tpfpympwyeedigsjh.png',
        matched: false
    },
]





const Game = () => {
    const [cards, setCards] = useState([])
    const [turns, setTurns] = useState(0)
    const [card1, setCard1] = useState(null)
    const [card2, setCard2] = useState(null)

    const suffleCards = () => {
        const suffleCards = [...cardsObj, ...cardsObj]
            .sort(() => Math.random() - .5).map(card => ({ ...card, id: Math.random() }))

        setCards(suffleCards)
        setTurns(0)
    }

    useEffect(() => {
        suffleCards()
    }, [])

    useEffect(() => {
        if (card1 && card2) {
            if (card1.id === card2.id) return
            if (card1.name === card2.name) {
                console.log("it's a match !")
                setCards(prevCards => {
                    return prevCards.map(card => {
                        if (card.name === card1.name) return { ...card, matched: true }
                        return card
                    })
                })
                resetTurns()
            } else {
                console.log('mybe next time')
                setTimeout(() => resetTurns(), 1000)
            }
        }
    }, [card1, card2])

    const handleOption = (card) => {
        card1 ? setCard2(card) : setCard1(card)
    }

    const resetTurns = () => {
        setCard1(null)
        setCard2(null)
        setTurns((prevTurn) => prevTurn + 1)
    }


    return (
        <div className="game-page main-view">
            <h2 className="game-title" >Memeber</h2>
            <div className="cards-list">
                {cards.map(card => (
                    <MemberCard key={card.id}
                        card={card}
                        handleOption={handleOption}
                        flipped={card === card1 || card === card2 || card.matched}
                    />
                ))}
            </div>
        </div>
    )
}

export default Game