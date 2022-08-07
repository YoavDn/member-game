
import React from "react"


const MsgModal = ({ msg }) => {
    return (
        <div>
            <div className="overlay"></div>
            <div className="msg-modal">
                <h2>{msg}</h2>
            </div>
            <div className="actions-btns flex">
                <button className="play-again-btn" >Play Again</button>
                <button className="leave-btn">Leave Game</button>
            </div>

        </div>
    )
}

export default MsgModal 