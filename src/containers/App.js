import React, { Component } from "react";
import SearchBox from "../components/SearchBox";
import CardList from "../components/CardList";
import Scroll from "../components/Scroll";
import ErrorBoundry from "../components/ErrorBoundry";

class App extends Component {
  constructor() {
    super();
    this.state = {
      asanas: [],
      searchfield: "",
    };
  }

  componentDidMount() {
    fetch("https://star-creator.github.io/yoga/")
      .then((response) => {
        return response.json();
      })
      .then((users) => {
        this.setState({ asanas: users });
      });
  }

  onSearchChange = (event) => {
    this.setState({ searchfield: event.target.value });
  };

  render() {
    const { asanas, searchfield } = this.state;

    const filteredAsanas = asanas.filter((asana) => {
      const english = asana.english_name.toLowerCase().includes(searchfield.toLowerCase()),
          sanskrit = asana.sanskrit_name.toLowerCase().includes(searchfield.toLowerCase());

      return english || sanskrit
    });

    return !asanas.length ? (
      <h1 className="tc">Loading ...</h1>
    ) : (
      <div className="tc">
        <h1>Yoga Asanas</h1>
        <SearchBox searchChange={this.onSearchChange} />
        <Scroll>
          <ErrorBoundry>
            <CardList asanas={filteredAsanas} />
          </ErrorBoundry>
        </Scroll>
      </div>
    );
  }
}

export default App;
