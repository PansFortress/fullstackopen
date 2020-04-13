import React, {useState} from 'react'
import ReactDOM from 'react-dom'

const App = (props) => {
  const emptyVotes = anecdotes.map(() => {return 0});

  const [current, setCurrent] = useState(0);
  const [votes, setVotes] = useState(emptyVotes);
  const [max, setMax] = useState(0);

  console.log("Initial State", votes);

  const handleVote = () => {
    const newVotes = [...votes];
    newVotes[current] += 1;
    setVotes(newVotes);

    if(newVotes[current] > newVotes[max]){
      setMax(current);
      console.log("current max", max);
    }
  }

  return (
    <div>
      <h2>Anecdote of the Day</h2>
      <p>{anecdotes[current]}</p>
      <button onClick={handleVote}> vote </button>
      <button onClick={() => {setCurrent(Math.floor(Math.random() * 5))}}>random quote</button>

      <h2>Anecdote With the Most Votes</h2>
      <p>{anecdotes[max]}</p>
    </div>
  )
}

const anecdotes = [
  "It's just 20 seconds, you can do anything for 20 seconds",
  "No pain no gain",
  "Giving up is a muscle, if you do it too often, you get good at it",
  "You can't expect someone to believe in you if you don't even believe in yourself",
  "Boogers",
]

ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)