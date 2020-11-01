import React, { Component } from 'react'
import './Toggler.css'

class Toggler extends Component {
  setLayer(url) {
    this.props.app.setState({
      style: url,
    })
  }

  render() {
    const styles = [
      { name: 'Satellite', url: 'mapbox://styles/mapbox/satellite-v9' },
      { name: 'Light', url: 'mapbox://styles/mapbox/light-v10' },
      { name: 'Dark', url: 'mapbox://styles/mapbox/dark-v10' },
    ]

    const buttons = styles.map((style, index) => {
      let className = ''

      if (style.url === this.props.app.state.style) {
        className = 'selected'
      }

      return (
        <button
          className={className}
          onClick={() => this.setLayer(style.url)}
          key={index}>
          {style.name}
        </button>
      )
    })

    return (
      <div className="toggler">
        {buttons}
        {/* {this.props.app.state.style} */}
      </div>
    )
  }
}

export default Toggler
