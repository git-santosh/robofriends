import React from "react";
import CardList from "../components/CardList/CardList";
import SearchBox from "../components/SearchBox/SearchBox";
// import {robots} from './robots';
import Scroll from "../components/Scroll/Scroll";
import ErrorBoundry from "../components/ErrorBoundry";
import "./App.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      robots: [],
      searchField: "",
    };
  }
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => this.setState({ robots: users }))
      .catch((err) => console.log("err", err));
  }
  onSearch = (event) => {
    console.log(event.target.value);
    this.setState({ searchField: event.target.value });
  };
  render() {
    const filterRobots = this.state.robots.filter((robot) => {
      return robot.name
        .toLowerCase()
        .includes(this.state.searchField.toLowerCase());
    });
    if (this.state.robots === 0) {
      return <h1> Loading </h1>;
    } else {
      return (
        <div className="tc">
          <h1 className="f1">RoboFriends</h1>
          <SearchBox searchChange={this.onSearch} />
          <Scroll>
            <ErrorBoundry>
              <CardList robots={filterRobots} />
            </ErrorBoundry>
          </Scroll>
        </div>
      );
    }
  }
}

export default App;
