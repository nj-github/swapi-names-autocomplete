import React from 'react';
import './App.css';
import Searchbox from './modules/Searchbox';
import Autocomplete from './modules/Autocomplete';

interface P {}
interface S {
  suggestions: string[]
}

class App extends React.Component<P, S> {
  constructor(props: P) {
    super(props);
    this.state = {
      suggestions: []
    }
  }
  searchresult = (result: string[]) => {
    console.log(result);
    this.setState({
      suggestions: result
    });
  }
  render() {
    return (
      <div className="App">
        <h1>StarWars Namesearch Autocomplete</h1>
        <Searchbox callback={this.searchresult}/>
        <Autocomplete suggestions={this.state.suggestions} />
      </div>
    );
  }
}

export default App;
