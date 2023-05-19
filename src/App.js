import { Component } from 'react';

import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [
        { name: 'Linda', id: '1dsfe12' },
        { name: 'Frank', id: '1dsasdd2' },
        { name: 'Jacky', id: '1dshgj54' },
        { name: 'Andrei', id: '1dsh1wsa4' }
      ]
    };
  }

  render() {
    return (
      <div className="App">
        {
          this.state.monsters.map((monster) => {
            return (
              <div key={monster.id}>
                <h1>{monster.name}</h1>
              </div>);
          })
        }
      </div>
    );
  }
}

export default App;
