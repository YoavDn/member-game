
import React from "react"


const MsgModal = ({ msg, handleBtnAction }) => {

    return (
        <div>
            <div className="overlay"></div>
            <div className="msg-modal">
                <h2>{msg}</h2>
            </div>
            <div className="actions-btns flex">
                <button onClick={() => handleBtnAction('play')} className="play-again-btn" >Play Again</button>
                <button onClick={() => handleBtnAction('leave')} className="leave-btn">Leave Game</button>
            </div>

        </div>
    )
}

export default MsgModal 