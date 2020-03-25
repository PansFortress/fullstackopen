import React, {useState} from 'react';
import ReactDOM from 'react-dom';

const Display = ({counter}) => {
  return (
    <div>{counter}</div>
  )
}

const Button = ({handleClick, text}) => {
  return (
    <button onClick={handleClick}>{text}</button>
  )
}

const App = (props) => {
  //useState returns a pair of values, the current State and a function that updates it
  const [ counter, setCounter ] = useState(0)

  const increaseByOne = () => setCounter(counter + 1)

  const setToZero = () => setCounter(0)

  return(
    <div>
      <Display counter={counter} />
      <Button handleClick={increaseByOne} text="plus" />
      <Button handleClick={setToZero} text="reset" />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'));
