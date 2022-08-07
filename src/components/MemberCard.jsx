import memeberBarry from '../assets/images/Member_Berries.png'


const MemberCard = ({ card }) => {
    return (
        <div className="member-card">
            {
                card.isOpen ?
                    <div className='open-member-card'>
                        <h2>{card.name}</h2>
                        <img className='card-img' src={card.imgUrl} alt="" />
                    </div> :
                    <img className='member-card-img' src={memeberBarry} alt="" />
            }
        </div>
    )
}

export default MemberCard