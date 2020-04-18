import React, { useState, useEffect } from 'react'
import axios from 'axios'

const Filter = props => {
  return (
    <div>filter for names with 
      <input value={props.newFilter} 
             onChange={props.handleChange} />
    </div>

  )
}

const PersonForm = props => {
  const {handleSubmit, nameInput, onNameChange, numberInput, onNumberChange} = props;
  return (
    <form onSubmit={handleSubmit}>
        <div>
          name: <input value={nameInput} onChange={onNameChange} />
        </div>
        <div>number: <input value={numberInput} onChange={onNumberChange}/></div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
  )
}

const Person = props => {
  const person = props.person;

  return(
    <li>{person.name} {person.number}</li>
  )
}

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setName] = useState('')
  const [newNumber, setNumber] = useState('')
  const [newFilter, setFilter] = useState('')

  const effect = () => {
    axios
      .get('http://localhost:3001/persons')
      .then(response => {
        setPersons(response.data)
      })
  }
  
  useEffect(effect, []);

  const handleNameChange = event => {
    setName(event.target.value);
  }

  const handleNumberChange = event => {
    setNumber(event.target.value);
  }

  const handleFilter = event => {
    setFilter(event.target.value)
    console.log("Hello");
  }

  

  const addPerson = event => {
    const newPerson = {
      name: newName,
      number: newNumber,
    }
    
    event.preventDefault();
    
    // Destructure person to only get the name from each object to search on
    if(persons.find(({name}) => name === newName)){
      alert(`${newName} is already in the phonebook!`);
      setName('');
      setNumber('');
      return;
    }

    setPersons(persons.concat(newPerson));
    setName('');
    setNumber('');
  }

  return (
    <div>
      <h1>Phonebook</h1>
      <Filter value={newFilter} handleChange={handleFilter}/>
      <h2>Add a New Person to the Phonebook</h2>
      

      <PersonForm 
        handleSubmit={addPerson}
        nameInput={newName}
        onNameChange={handleNameChange}
        numberInput={newNumber}
        onNumberChange={handleNumberChange}
      />

      <h2>Numbers</h2>
      <ul>
        {
          persons.map(person => 
            {
              if(person.name.toLowerCase().includes(newFilter.toLowerCase())){
                return (
                  <Person key={person.name} person={person}/>  
                )}
                
              return null;
              }
        )}
      </ul>
    </div>
  )
}

export default App;