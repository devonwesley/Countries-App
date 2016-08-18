import React, { Component } from 'react'

class CountryGrid extends Component {
  render() {
    return (
      <div className="container">
        <section className="text-center" id="pinBoot">
          {this.props.countries()}
        </section>
      </div>
    )
  }
}

export default CountryGrid
