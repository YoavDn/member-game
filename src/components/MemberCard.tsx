import memeberBarry from '../assets/images/Member_Berries.png'
import { IMemberCard } from '../types'

type TMemberProps = {
    card: IMemberCard,
    handleOption: (card: IMemberCard) => void,
    flipped: boolean,
    disabled: boolean,
}

const MemberCard = ({ card, handleOption, flipped, disabled }: TMemberProps) => {

    const hendleClick = () => {
        if (!disabled) {
            handleOption(card)
        }
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