import { Component } from 'react';

import logo from './logo.svg';
import './App.css';

class App extends Component {

  constructor() {
    super();

    this.state = {
      monsters: [],
    };
  }

  async componentDidMount() {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    if (res.ok) {
      const users = await res.json();
      this.setState({ monsters: users });
    } else {
      alert('http error:' + res.status);
    }
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
