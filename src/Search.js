import React, { Component } from 'react'
import './Search.css'

class Search extends Component {
  constructor(props) {
    super(props)

    this.state = {
      value: '',
      isLoading: false,
    }

    //  this binds the private handleChange+handleSubmit to the entire component
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange = (event) => {
    this.setState({
      value: event.target.value,
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()

    const accessToken =
      'pk.eyJ1IjoiYW5keWNhdGNoIiwiYSI6ImNrZ3ZvZmtkNTAyYjEyenBuaXM5NzlnZzYifQ.Luh-XFlRjAsxcD3jL7UHdg'

    const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${this.state.value}.json?access_token=${accessToken}`

    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        const places = this.props.app.state.places
        const firstResult = data.features[0]
        places.push({
          name: this.state.value,
          longitude: firstResult.center[0],
          latitude: firstResult.center[1],
        })

        // this will bubble up to App
        this.props.app.setState({
          places: places,
        })

        // this setState is for * this * component
        this.setState({
          value: '',
        })
      })
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          onChange={this.handleChange}
          value={this.state.value}
          placeholder="Search..."
        />
      </form>
    )
  }
}

export default Search
