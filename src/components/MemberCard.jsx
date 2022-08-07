import memeberBarry from '../assets/images/Member_Berries.png'


const MemberCard = ({ card }) => {
    return (
        <div className="member-card">
            {
                card.isOpen ?
                    <div>
                        <h2>{card.name}</h2>
                    </div> :
                    <img className='member-card-img' src={memeberBarry} alt="" />
            }
        </div>
    )
}

export default MemberCard