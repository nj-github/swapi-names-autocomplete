
import React from 'react';

interface P {
  suggestion: {
    beginning: string,
    middle: string,
    end: string
  }
}

const Suggestion: React.FC<P> = (props: P) => {
  return (
    <div>
      <span>{props.suggestion.beginning}</span>
      <span className={'found'}>{props.suggestion.middle}</span>
      <span>{props.suggestion.end}</span>
    </div>
  );

}

export default Suggestion;
