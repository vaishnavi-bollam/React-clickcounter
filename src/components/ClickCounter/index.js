import {Component} from 'react'

import './index.css'

class ClickCounter extends Component {
  state = {count: 0}

  buttonClicked = () => {
    this.setState(prevState => ({count: prevState.count + 1}))
  }

  render() {
    const {count} = this.state
    return (
      <div>
        <h1>
          The Button has been clicked <span>{count}</span> times
        </h1>
        <p>Click the button to increase the count</p>
        <button className="cursor" onClick={this.buttonClicked}>
          Click Me
        </button>
      </div>
    )
  }
}

export default ClickCounter
