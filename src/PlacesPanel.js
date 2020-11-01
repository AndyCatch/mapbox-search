import React, { Component } from 'react'
import PlaceItem from './PlaceItem'
import './PlacesPanel.css'

class PlacesPanel extends Component {
  render() {
    const places = this.props.app.state.places

    let placeItems = <div className="no-results">Nothing added</div>
    if (places.length > 0) {
      placeItems = places.map((place, index) => {
        return <PlaceItem app={this.props.app} place={place} key={index} />
      })
    }

    return <div className="places">{placeItems}</div>
  }
}

export default PlacesPanel
