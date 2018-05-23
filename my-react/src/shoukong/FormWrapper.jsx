import React, {Component} from 'react'

export default class FormWrapper extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      password: ''
    }
  }
  handleChange = e => {
    const target = e.target
    this.setState({
      [target.name]: target.value
    })
  }
  handleSubmit = e => {
    console.log(`login successsfully, username: ${this.state.name}, pwd: ${this.state.password}`)
    e.preventDefault()
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          用户名：
          <input
            type="text"
            name="name"
            value={this.state.name}
            onChange={this.handleChange}
          />
        </label>
        <label>
          密码：
          <input
            type="password"
            name="password"
            value={this.state.password}
            onChange={this.handleChange}
          />
        </label>
        <input type="submit" value="登录" />
      </form>
    )
  }
}
