import React, { useState, useEffect } from "react";
import SearchBox from "../components/SearchBox";
import CardList from "../components/CardList";
import Scroll from "../components/Scroll";
import ErrorBoundry from "../components/ErrorBoundry";

function App() {
  const [asanas, setAsanas] = useState([]);
  const [searchfield, setSearchfield] = useState('');

  useEffect(() => {
    fetch("https://star-creator.github.io/yoga/")
      .then((response) => {return response.json();})
      .then((users) => {setAsanas(users);});
  },[]);

  const onSearchChange = (event) => {
    setSearchfield(event.target.value);
  };

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
      <SearchBox searchChange={onSearchChange} />
      <Scroll>
        <ErrorBoundry>
          <CardList asanas={filteredAsanas} />
        </ErrorBoundry>
      </Scroll>
    </div>
  );
}

export default App;
