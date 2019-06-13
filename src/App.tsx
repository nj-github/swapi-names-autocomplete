import React from 'react';
import './App.css';
import Searchbox from './modules/Searchbox';
import Autocomplete from './modules/Autocomplete';

interface P {}
interface S {}

class App extends React.Component<P, S> {
  searchresult = (result: any[]) => {
    console.log(result);
  }
  render() {
    return (
      <div className="App">
        <h1>StarWars Namesearch Autocomplete</h1>
        <Searchbox callback={this.searchresult}/>
        <Autocomplete />
      </div>
    );
  }
}

export default App;
