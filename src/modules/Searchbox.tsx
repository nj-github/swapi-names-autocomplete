
import React from 'react';
import {DebounceInput} from 'react-debounce-input';
import { SwapiApi } from '../api/swapi-api'

interface P {
  callback: (s: string, x: any[]) => void
}
interface S {
  isBusy: boolean,
  searchString: string
}

class Searchbox extends React.Component<P, S> {
  constructor(p: P) {
    super(p);
    this.state = {
      isBusy: false,
      searchString: ''
    }

  }

  swapiApi = new SwapiApi();
  search = (searchString: string) => {
    this.setState({
      isBusy: true,
      searchString: searchString
    });
    let res = this.swapiApi.search(searchString);
    res.then((found: string[]) => {
      this.props.callback(this.state.searchString, found); 
      this.setState({
        isBusy: false
      }); 
    });
  }

  getSpinner = (isBusy: boolean) => {
    let spinnerClasses = 'spinner spinner-border text-secondary';
    return isBusy ? spinnerClasses : spinnerClasses + ' no-show';
  }

  render() {
    return (
      <div>
        <h5>Find anyone from StarWars:</h5>
        <div className={this.getSpinner(false)} role="status"></div>
        <DebounceInput
            minLength={1}
            debounceTimeout={300}
            onChange={(event: any) => {this.search(event.target.value);} } />
        <div className={this.getSpinner(this.state.isBusy)} role="status"></div>
      </div>
    );
  }

}

export default Searchbox;
