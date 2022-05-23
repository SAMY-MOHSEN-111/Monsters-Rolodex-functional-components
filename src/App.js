import { Component } from "react";
import CardList from "./components/card-list/card-list.component.jsx";
import SearchBox from "./components/search-box/search-box.component.jsx";
import "./App.css";

class App extends Component {
  constructor() {
    // 1
    super();
    this.state = {
      monsters: [],
      searchField: "",
    };
  }
  // whenever we have some class component that needs some API call to get data we put it in
  // componentDidMount method
  componentDidMount() {
    // 3
    try {
      fetch(`https://jsonplaceholder.typicode.com/users`)
        .then((response) => response.json())
        .then((data) =>
          this.setState(
            () => {
              return { monsters: data };
            },
            () => {
              console.log(this.state);
            }
          )
        );
    } catch (err) {
      console.log(`${err} ***#***`);
    }
  }
  //
  onSearchChange = (event) => {
    const searchField = event.target.value.toLowerCase();
    this.setState(() => {
      // this is a short hand JS: the key is the name of the variable
      //  the value is the value of this variable
      return { searchField };
    });
  };
  //
  render() {
    const { monsters, searchField } = this.state;
    const { onSearchChange } = this;
    //
    const filteredMonsters = monsters.filter(
      (monster) => monster.name.toLowerCase().includes(searchField)
      // console.log(typeof monster.name)
    );
    return (
      <div className="App">
        <h1 className="app-title">Monsters Rolodex</h1>
        <SearchBox
          onChangeHandler={onSearchChange}
          placeHolder="search monster"
          className="search-box"
        />
        <CardList monsters={filteredMonsters} anything={["a", "z"]} />
      </div>
    );
  }
}
// note that the order of calling our methods is as following
// 1 2 3 2
// this is because the constructor will run first
// then the render method will init the UI template
// then the componentDidMount will run and it is async one as it has fetch
// then when react detects that there is change in the state it will rerender the ui again
export default App;
