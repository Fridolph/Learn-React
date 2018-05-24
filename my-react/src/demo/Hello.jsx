import React, {Component} from 'react'

export default class Hello extends Component {
  constructor(props) {
    super(props)
    this.timer = null
    this.state = {
      date: new Date()
    }
  }

  updateDate = () => {
    this.setState({
      date: new Date()
    })
  }

  render() {
    return (
      <div>
        <h1>hello, {this.state.date.toString()}</h1>
      </div>
    )
  }

  componentDidMount() {
    this.timer = setInterval(this.updateDate, 1000)
  }

  componentWillUnmount() {
    clearInterval(this.timer)
  }
}
