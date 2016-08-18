import React, { Component } from 'react'
import Header from './Header'
import CountryGrid from '../country/CountryGrid'
import CountryGridContent from '../country/CountryGridContent'

import '../styles/App.css'

class App extends Component {
  constructor() {
    super()
    this.state = { countries: [] }
  }

  componentDidMount() {
    const url = 'http://localhost:5000/list-countries'
    fetch(url, { mode: 'cors' })
      .then( response => response.json() )
      .then( countries => this.setState({countries}))
  }

  listCountries() {
    return this.state.countries.map((country, index) => {
      return <CountryGridContent key={index} country={country} />
    })
  }

  render() {
    return (
      <div>
        <Header />
        <CountryGrid countries={this.listCountries.bind(this)}/>
      </div>
    )
  }
}

export default App
