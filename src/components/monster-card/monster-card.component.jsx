import './monster-card.style.css';

const MonsterCard = ({ monster }) => {
    const { name, email, id } = monster;
    return (
        <div key={id} className="card-container">
            <img
                alt={`monster ${name}`}
                src={`https://robohash.org/${id}?set=set2&size=180x180`}
                className="monster-pic"
            />
            <h2>{name}</h2>
            <p>{email}</p>
        </div>
    )

}

export default MonsterCard;