
import React from 'react';

interface P {
  suggestion: string,
}

const Suggestion: React.FC<P> = (props: P) => {
  return (
    <div>
      <div>{props.suggestion}</div>
    </div>
  );

}

export default Suggestion;
