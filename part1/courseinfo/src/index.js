import React from 'react'
import ReactDOM from 'react-dom'

const App = () => {
  const course ={
    name: 'Half stack application development',
    parts: [
    {
      name: 'Fundamentals of React',
      exercises: 10
    },
    {
      name:'Using props to pass data',
      exercises: 7
    },
    {
      name: 'State of a component',
      exercises: 14
    },
  ]
}
  
  return (
    <div>
      <Header course={course}/>
      <Content parts = {course.parts} />
      <Total parts={course.parts} />
    </div>
  )
}

const Header = (props) => {
  return (
   <h1>{props.name}</h1>
  )
}

const Content = (props) => {
  const [firstPart, secondPart, thirdPart] = props.parts;

  return (
    <>
      <p>{firstPart.name} {firstPart.exercises}</p>
      <p>{secondPart.name} {secondPart.exercises}</p>
      <p>{thirdPart.name} {thirdPart.exercises}</p>
    </>
  )
}

const Total = (props) => {
  const [firstPart, secondPart, thirdPart] = props.parts;
  const totalExercises = firstPart.exercises + secondPart.exercises + thirdPart.exercises;
  return (
    <p>{totalExercises}</p>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
