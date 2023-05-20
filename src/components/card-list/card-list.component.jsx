import { Component } from "react";
import MonsterCard from '../monster-card/monster-card.component';
import './card-list.styles.css';

class CardList extends Component {
    render() {
        const { monsters } = this.props;
        return (
            <div className="cards-list">
                {monsters.map(monster => {
                    return <MonsterCard monster={monster} key={monster.id} />
                })}
            </div>
        )
    }
}

export default CardList;