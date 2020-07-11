import React from "react";
import "./App.css";
import { CardList } from "./components/cardList/cardList.component";
import { SearchField } from "./components/searchField/serachField.component";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      userInput: "",
    };
  }

  handleChange = (e) => {
    this.setState({ userInput: e.target.value });
  };

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => this.setState({ monsters: users }));
  }

  render() {
    const { monsters, userInput } = this.state;
    const filteredMonsters = monsters.filter((monster) =>
      monster.name.toLowerCase().includes(userInput.toLowerCase())
    );

    return (
      <div className="App">
        <h1>Monster Rolodex</h1>
        <SearchField
          placeholder="search monsters"
          filteredMonsters={this.handleChange}
        />
        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}

export default App;
