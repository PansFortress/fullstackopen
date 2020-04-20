import React, {useState, useEffect} from 'react';
import axios from 'axios'

const CONFIG = {
  countryAPI: "https://restcountries.eu/rest/v2/all",
}

const Country = props => {
  const country = props.country
  const [expandView, setExpandView] = useState(false);
  
  console.log("Render");
  return (
    <div>
      {country.name}
      <button onClick={() => setExpandView(!expandView)}>
        {expandView ? 'minimize' : 'expand'}
      </button>
      {expandView ? <div>test</div> : null }
    </div>
  )
}

const App = props => {
  const [allCountries, setCountries] = useState([]);
  const [filter, setFilter] = useState('');

  const effect = () => {
    axios
      .get(CONFIG.countryAPI)
      .then(response => {
        setCountries(response.data);
      })
  }

  useEffect(effect, []);

  const handleFilterChange = event => {
    setFilter(event.target.value);
  }

  return (
    <div>
      <div>Find Countries <input value={filter} onChange={handleFilterChange}/> </div>
      {allCountries.map(country => {
        return country.name.toLowerCase().includes(filter.toLowerCase()) 
          ? <Country key={country.numericCode} country={country} />
          : null
      })}
    </div>
  )
}

export default App;
