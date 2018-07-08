import React, { Component } from 'react';
import './App.css';
import { getRestaurants } from './reducer/restaurants/actions';
import CharacterList from './components/RestaurantList';


class App extends Component {
  render() {
    return (
      <div className="App">
        <CharacterList />
      </div>
    );
  }
}


export default App;
