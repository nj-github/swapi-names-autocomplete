import React from 'react';
import Suggestion from './Suggestion';

interface P {
	suggestions: string[]
}

const Autocomplete: React.FC<P> = (props: P) => {
  return (
    <div>
      {props.suggestions.map((s: string, i: number) => <Suggestion key={i} suggestion={s} />)}
    </div>
  );
}

export default Autocomplete;
