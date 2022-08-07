import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from 'react-router'
import MemberCard from "../components/MemberCard";
import MsgModal from "../components/MsgModal";

const cardsObj = [
    {
        name: 'Harlem Shake',
        imgUrl: 'https://www.howcoolbrandsstayhot.com/wp-content/uploads/2013/04/harlem-shake-430x3081.jpg',
        matched: false
    },
    {
        name: 'MP3',
        imgUrl: 'https://m.media-amazon.com/images/I/71eF5x2ZmtL._AC_SS450_.jpg',
        matched: false
    },
    {
        name: 'RC Cola',
        imgUrl: 'https://cdnprod.mafretailproxy.com/sys-master-root/h96/h69/14415571124254/151135_main.jpg_480Wx480H',
        matched: false
    },
    {
        name: 'Crocs',
        imgUrl: 'https://www.tradeinn.com/f/10/104739/crocs-crocband-clogs.jpg',
        matched: false
    },
]





const Game = () => {
    const [cards, setCards] = useState([])
    const [turns, setTurns] = useState(0)
    const [card1, setCard1] = useState(null)
    const [card2, setCard2] = useState(null)
    const [disabled, setDisabled] = useState(false)
    const [gameEnded, setGameEnded] = useState(false)

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
        if (card1 && card2 && !gameEnded) {
            setDisabled(true)

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
        if (cards.every(card => card.matched)) return setGameEnded(true)
        setCard1(null)
        setCard2(null)
        setTurns((prevTurn) => prevTurn + 1)
        setDisabled(false)
    }


    return (
        <div className="game-page ">
            {gameEnded && <MsgModal />}
            <h2 className="game-title" >Memeber</h2>
            <div className="cards-list">
                {cards.map(card => (
                    <MemberCard key={card.id}
                        card={card}
                        handleOption={handleOption}
                        flipped={card === card1 || card === card2 || card.matched}
                        disabled={disabled}
                    />
                ))}
            </div>
        </div>
    )
}

export default Game