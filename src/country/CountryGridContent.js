import React, { Component } from 'react'

class CountryGrid extends Component {
  countryName() {
    const name = this.props.country.name
  }

  render() {
    return (
      <article className="white-panel" /*onClick={}*/>
        <h5>
          Country: <strong>{this.props.country.name}</strong>
        </h5>
        <p className="text-success">
          Capital: <strong>{this.props.country.capital}</strong>
        </p>
        <p className="text-danger">
          Population: <strong>{this.props.country.population.toLocaleString()}</strong>
        </p>
      </article>
    )
  }
}

export default CountryGrid
