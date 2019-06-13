import React from 'react';
import './App.css';
import { SwapiApi } from './api/swapi-api'

const App: React.FC = () => {
  let swapiApi: SwapiApi = new SwapiApi();
  let res = swapiApi.search('r2');
  res.then((x: any) => console.log(x));
  return (
    <div className="App">
      <h1>swapi namesearch autocomplete</h1>
    </div>
  );
}

export default App;
