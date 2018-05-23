import React, {Component} from 'react'

export default class FormCheckbox extends Component {
  constructor() {
    super()
    this.state = {
      react: false,
      redux: false,
      mobx: false
    }
  }
  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.checked
    })
  }
  handleSubmit = e => {
    console.log('当前选择的是 ', this.state)
    e.preventDefault()
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          react
          <input type="checkbox" name="react" value="react" checked={this.state.react} onChange={this.handleChange} />
        </label>
        <label>
          redux
          <input type="checkbox" name="redux" value="redux" checked={this.state.redux} onChange={this.handleChange} />
        </label>
        <label>
          mobx
          <input type="checkbox" name="mobx" value="mobx" checked={this.state.mobx} onChange={this.handleChange} />
        </label>
        <input type="submit" value="确认选择" />
      </form>
    )
  }
}
