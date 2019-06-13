
import React from 'react';
import {DebounceInput} from 'react-debounce-input';
import { SwapiApi } from '../api/swapi-api'

interface P {
  callback: (x: any[]) => void
}
interface S {}

class Searchbox extends React.Component<P, S> {

  swapiApi = new SwapiApi();
  search = (searchString: string) => {
    let res = this.swapiApi.search(searchString);
    res.then( (found: any[]) => {this.props.callback(found);} );
  }

  render() {
    return (
      <div>
        <h5>Find anyone from StarWars:</h5>
        <DebounceInput
            minLength={2}
            debounceTimeout={400}
            onChange={(event: any) => {this.search(event.target.value);} } />
      </div>
    );
  }

}

export default Searchbox;