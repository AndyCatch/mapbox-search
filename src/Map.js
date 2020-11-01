import React, { Component } from 'react'
import mapbox from 'mapbox-gl'
import './Map.css'

class Map extends Component {
  componentDidMount() {
    const app = this.props.app // refers to -> App.js -> <Map app={this}/>

    mapbox.accessToken =
      'pk.eyJ1IjoiYW5keWNhdGNoIiwiYSI6ImNrZ3ZvZmtkNTAyYjEyenBuaXM5NzlnZzYifQ.Luh-XFlRjAsxcD3jL7UHdg'

    const map = new mapbox.Map({
      container: 'map',
      style: app.state.style,
      center: [app.state.longitude, app.state.latitude],
      zoom: 12,
    })

    const navControl = new mapbox.NavigationControl()
    map.addControl(navControl, 'top-right')

    this.props.app.setState({
      map: map,
    })
  }

  render() {
    const app = this.props.app
    const map = app.state.map

    if (map) {
      // setStyle is from the Mapbox API
      // this will pass in the object containing style bubbled from Toggler
      map.setStyle(app.state.style)
    }

    return <div id="map">Map is loading...</div>
  }
}

export default Map
