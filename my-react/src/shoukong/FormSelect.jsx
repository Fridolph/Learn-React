import React, {Component} from 'react'

export default class FormSelect extends Component {
  constructor() {
    super()
    this.state = {
      value: 'mobx'
    }
  }
  handleChange = e => {
    let value = e.target.value
    this.setState({
      value
    })
  }
  handleSubmit = e => {
    console.log(`selected ${this.state.value}`)
    e.preventDefault()
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Pick one library:
          <select value={this.state.value} onChange={this.handleChange}>
            <option value="react">react</option>
            <option value="redux">redux</option>
            <option value="mobx">mobx</option>
          </select>
        </label>
        <input type="submit" />
      </form>
    )
  }
}
