import { useState, useEffect } from 'react';

import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';
import './App.css';

const App = () => {
  const [searchField, setSearchField] = useState('');
  const [monsters, setMonsters] = useState([]);
  const [filteredMosters, setFilteredMonsters] = useState(monsters);

  useEffect(() => {
    const getMonsters = async () => {
      const res = await fetch('https://jsonplaceholder.typicode.com/users');
      if (res.ok) {
        const users = await res.json();
        setMonsters(users);
      } else {
        alert('http error:' + res.status);
      }
    };

    getMonsters();
  }, []);

  useEffect(() => {
    const newFilteredMosters = monsters.filter((monster) => monster.name.toLocaleLowerCase().includes(searchField));
    setFilteredMonsters(newFilteredMosters);
  }, [monsters, searchField]);

  const onSearchChange = (e) => {
    const searchFieldString = e.target.value.toLocaleLowerCase();
    setSearchField(searchFieldString);
  };

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
  )
}

// class App extends Component {

//   constructor() {
//     super();

//     this.state = {
//       monsters: [],
//       searchField: '',
//     };
//   }

// async componentDidMount() {
//   const res = await fetch('https://jsonplaceholder.typicode.com/users');
//   if (res.ok) {
//     const users = await res.json();
//     this.setState({ monsters: users });
//   } else {
//     alert('http error:' + res.status);
//   }
// }

//   onSearchChange = (e) => {
//     const searchField = e.target.value.toLocaleLowerCase();
//     this.setState({ searchField });
//   }

//   render() {
//     const { monsters, searchField } = this.state;
//     const { onSearchChange } = this;

//     const filteredMosters = monsters.filter((monster) => monster.name.toLocaleLowerCase().includes(searchField));

//     return (
//       <div className="App">
//         <h1 className='app-title'>Monsters Rolodex</h1>
//         <SearchBox
//           onChangeHandler={onSearchChange}
//           placeholder={'search monsters'}
//           className={'search-box__monsters'}
//         />
//         <CardList monsters={filteredMosters} />
//       </div>
//     );
//   }
// }

export default App;
