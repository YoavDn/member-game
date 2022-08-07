
import React from "react"


const MsgModal = ({ msg }) => {
    return (
        <div>
            <div className="overlay"></div>
            <div className="msg-modal">{msg}</div>
        </div>
    )
}

export default MsgModal 