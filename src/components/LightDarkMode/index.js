import {Component} from 'react'

import './index.css'

class LightDarkMode extends Component {
  state = {isDarkMode: true}

  onClicked = () => {
    this.setState(prevState => ({
      isDarkMode: !prevState.isDarkMode,
    }))
  }

  renderButton = () => {
    const {isDarkMode} = this.state
    if (isDarkMode === true) {
      return (
        <div className="dark-card-container">
          <h1 className="dark-card-heading">Click To Change Mode</h1>
          <button className="btn-dark" onClick={this.onClicked} type="button">
            Light Mode
          </button>
        </div>
      )
    }
    return (
      <div className="light-card-container">
        <h1 className="light-card-heading">Click To Change Mode</h1>
        <button className="btn-light" onClick={this.onClicked} type="button">
          Dark Mode
        </button>
      </div>
    )
  }

  render() {
    return <div className="bg-container">{this.renderButton()}</div>
  }
}

export default LightDarkMode
