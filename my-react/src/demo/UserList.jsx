import React, {Component} from 'react'

export default class UserList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      newUser: ''
    }
  }
  handleChange = e => {
    this.setState({
      newUser: e.target.value
    })
  }
  handleClick = () => {
    if (this.state.newUser && this.state.newUser.length > 0) {
      this.props.onAddUser(this.state.newUser)
    }
  }
  handleUserClick = userId => {
    this.props.onSetCurrentUser(userId)
  }
  render() {
    return (
      <div>
        <ul className="user-list">
          {this.props.users.map(user => (
            <li
              key={user.id}
              className={(this.props.currentUserId === user.id) ? 'current' : ''}
              onClick={this.handleUserClick(user.id)}
            >
              <span>{user.name}</span>
            </li>
          ))}
        </ul>
        <input onChange={this.handleChange} value={this.state.newUser} />
        <button onClick={this.handleClick}>add uesr</button>
      </div>
    )
  }
}
