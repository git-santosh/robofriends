import React from "react";
import CardList from "../components/CardList/CardList";
import SearchBox from "../components/SearchBox/SearchBox";
// import {robots} from './robots';
import Scroll from "../components/Scroll/Scroll";
import ErrorBoundry from "../components/ErrorBoundry";
import "./App.css";
import { setSearchField, requestRobots } from "../action";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
  return {
    searchField: state.searchRobots.searchField,
    robots: state.requestRobots.robots,
    isPending: state.requestRobots.isPending,
    error: state.requestRobots.error,
  };
};

const mapDispachToProps = (dispatch) => {
  return {
    onSearch: (event) => setSearchField(event.target.value),
    onRequestRobots: () => dispatch(requestRobots()),
  };
};
class App extends React.Component {
  // constructor() {
  //   super();
  //   this.state = {
  //     robots: []
  //     // searchField: "",
  //   };
  // }
  componentDidMount() {
    // console.log('store ',this.props.store.getState());
    // fetch("https://jsonplaceholder.typicode.com/users")
    //   .then((response) => response.json())
    //   .then((users) => this.setState({ robots: users }))
    //   .catch((err) => console.log("err", err));

    this.props.onRequestRobots();
  }

  render() {
    // const {robots } = this.state;
    const { searchField, onSearch, robots , isPending } = this.props;

    const filterRobots = robots.filter((robot) => {
      return (
        robot.name
          .toLowerCase()
          // .includes(this.state.searchField.toLowerCase());
          .includes(searchField.toLowerCase())
      );
    });
    if (isPending) {
      return <h1> Loading </h1>;
    } else {
      return (
        <div className="tc">
          <h1 className="f1">RoboFriends</h1>
          <SearchBox searchChange={onSearch} />
          {/* <Scroll> */}
            <ErrorBoundry>
              <CardList robots={filterRobots} />
            </ErrorBoundry>
          {/* </Scroll> */}
        </div>
      );
    }
  }
}

export default connect(mapStateToProps, mapDispachToProps)(App);
