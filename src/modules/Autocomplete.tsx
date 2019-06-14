import React from 'react';
import Suggestion from './Suggestion';
import mark from '../helper-functions/mark';

interface P {
	suggestions: string[],
	searchString: string
}

const Autocomplete: React.FC<P> = (props: P) => {
  return (
    <div>
      {props.suggestions.map((s: string, i: number) => <Suggestion key={i} suggestion={mark(s, props.searchString)} />)}
    </div>
  );
}

export default Autocomplete;
