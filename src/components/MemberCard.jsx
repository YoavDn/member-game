import memeberBarry from '../assets/images/Member_Berries.png'


const MemberCard = ({ card, handleOption, flipped }) => {

    const hendleClick = () => {
        handleOption(card)
    }

    return (
        <div className={flipped ? 'member-card flipped' : 'member-card'} onClick={hendleClick} >
            <div className="card-front">
                <h2>{card.name}</h2>
                <img className='card-img' src={card.imgUrl} alt="" />
            </div>
            <div className='card-back'>
                <img src={memeberBarry} alt="" />
            </div>
        </div>

    )
}

export default MemberCard