import React, {useState} from 'react';
import ReactDOM from 'react-dom';

const Statistics = (props) => {
  const {title, good, neutral, bad} = props;
  const all = good+neutral+bad;
  const average = ((good*1)+(neutral*0)+(bad*-1)/(all));
  const positive = (good/all * 100) + '%';

  if (all <= 0) {
    return (
      <div>
        No feedback given yet
      </div>
    )
  }
  return(
    <table>
      <tbody>
        <tr><th>{title}</th></tr>
        <Statistic text="good" value={good} />
        <Statistic text="neutral" value={neutral} />
        <Statistic text="bad" value={bad} />
        <Statistic text="all" value={all} />
        <Statistic text="average" value={average} />
        <Statistic text="positive" value={positive} />
      </tbody>
    </table>
  )
}

const Button = (props) => {
  return (
    <button onClick={props.handleClick}> {props.text} </button>
  )
}

const Statistic = (props) =>
{
  return (
    <tr>
      <td>{props.text}</td>
      <td>{props.value}</td>
    </tr>
  )
}

const App = (props) => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);


  return (
    <div>
      <h2>Give Feedback</h2>
      <Button handleClick={() => setGood(good + 1)} text="good"/>
      <Button handleClick = {() => setNeutral(neutral + 1)} text="neutral"/>
      <Button handleClick = {() => setBad(bad + 1)} text="bad" />
      
      <Statistics title="Statistics" 
        good={good} 
        neutral={neutral} 
        bad={bad} />
      
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'));