import React, { Component } from 'react'

class CountryDetails extends Component {
  render() {
    return (
      <div className="container">
        <div className="jumbotron" id="pinBoot">
          {this.props.countries()}
        </div>
      </div>
    )
  }
}

export default CountryDetails
