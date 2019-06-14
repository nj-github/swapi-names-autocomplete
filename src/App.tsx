import React from 'react';
import './App.css';
import Searchbox from './modules/Searchbox';
import Autocomplete from './modules/Autocomplete';

interface P {}
interface S {
  searchString: string,
  suggestions: string[]
}

class App extends React.Component<P, S> {
  constructor(props: P) {
    super(props);
    this.state = {
      searchString: '',
      suggestions: []
    }
  }
  searchresult = (searchString: string, result: string[]) => {
    this.setState({
      searchString,
      suggestions: result
    });
  }
  render() {
    return (
      <div className="App">
        <h1>StarWars Namesearch Autocomplete</h1>
        <Searchbox callback={this.searchresult} />
        <Autocomplete suggestions={this.state.suggestions} searchString={this.state.searchString} />
      </div>
    );
  }
}

export default App;
