import React from 'react';
import ReactDOM from 'react-dom';

const Hello = props => {
  return (
    <div>
      <p>Hello World {props.name}</p>
    </div>
  );
};

const App = () => (
  <React.Fragment>
    <h1>Greetings</h1>
    <Hello name="James" />
  </React.Fragment>
);

ReactDOM.render(<App />, document.getElementById('root'));
