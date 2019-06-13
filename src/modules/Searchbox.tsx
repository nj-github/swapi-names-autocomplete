
import React from 'react';
import {DebounceInput} from 'react-debounce-input';
import { SwapiApi } from '../api/swapi-api'

interface P {
  callback: (x: any[]) => void
}
interface S {
  isBusy: boolean
}

class Searchbox extends React.Component<P, S> {
  constructor(p: P) {
    super(p);
    this.state = {
      isBusy: false
    }

  }

  swapiApi = new SwapiApi();
  search = (searchString: string) => {
    this.setState({isBusy: true});
    let res = this.swapiApi.search(searchString);
    res.then( (found: any[]) => {this.props.callback(found); this.setState({isBusy: false}); } );
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
            minLength={2}
            debounceTimeout={400}
            onChange={(event: any) => {this.search(event.target.value);} } />
        <div className={this.getSpinner(this.state.isBusy)} role="status"></div>
      </div>
    );
  }

}

export default Searchbox;
