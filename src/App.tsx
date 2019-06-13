import React from 'react';
import './App.css';
import Searchbox from './modules/Searchbox';
import Autocomplete from './modules/Autocomplete';

const App: React.FC = () => {
  return (
    <div className="App">
      <h1>StarWarsApi Namesearch Autocomplete</h1>
      <Searchbox />
      <Autocomplete />
    </div>
  );
}

export default App;
