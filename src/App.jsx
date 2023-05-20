import { Component } from 'react';

import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';
import './App.css';

class App extends Component {

  constructor() {
    super();

    this.state = {
      monsters: [],
      searchField: '',
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

  onSearchChange = (e) => {
    const searchField = e.target.value.toLocaleLowerCase();
    this.setState({ searchField });
  }

  render() {
    const { monsters, searchField } = this.state;
    const { onSearchChange } = this;

    const filteredMosters = monsters.filter((monster) => monster.name.toLocaleLowerCase().includes(searchField));

    return (
      <div className="App">
        <h1 className='app-title'>Monsters Rolodex</h1>
        <SearchBox
          onChangeHandler={onSearchChange}
          placeholder={'search monsters'}
          className={'search-box__monsters'}
        />
        <CardList monsters={filteredMosters} />
      </div>
    );
  }
}

export default App;
