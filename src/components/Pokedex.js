import React, { Component } from 'react';
import Pokecard from './Pokecard';
import './Pokedex.css';

class Pokedex extends Component {
  render() {
    let title;
    if (this.props.isWinner) {
      title = <h1 className='winner'>WINNER!</h1>;
    } else {
      title = <h1 className='loser'>LOSER!</h1>;
    }
    return (
      <div className='pokedex'>
        {title}
        <h4>Total Experience: {this.props.exp}</h4>

        <div className='pokedex-cards'>
          {this.props.pokemon.map((p) => (
            <Pokecard id={p.id} name={p.name} type={p.type} exp={p.base_experience} />
          ))}
        </div>
      </div>
    );
  }
}

export default Pokedex;
