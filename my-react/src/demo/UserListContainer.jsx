import React, {Component} from 'react'
import UserList from './UserList'
import UserDetail from './UserDetail'

export default class UserListContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      users: [],
      currentUserId: 0
    }
  }
  handleAddUser = user => {
    setTimeout(() => {
      this.setState(preState => ({
        users: [...preState.users, {id: this.state.users.length + 1, name: user}]
      }))
    }, 100)
  }
  handleSetCurrentUser = userId => {
    this.setState({
      currentUserId: userId
    })
  }
  render() {
    const filterUsers = this.state.users.filter(user => user.id === this.state.currentUserId)
    const currentUser = filterUsers.length > 0 ? filterUsers[0] : null

    return [
      <UserList
        users={this.state.users}
        onAddUser={this.handleAddUser}
        onSetCurrentUser={this.handleSetCurrentUser}
      />,
      <UserDetail key={currentUser} currentUser={currentUser} />
    ]
  }
  componentDidMount() {
    setTimeout(() => {
      this.setState({
        users: [
          {id: 1, name: 'fri'},
          {id: 2, name: 'yk'},
          {id: 3, name: 'wb'}
        ]
      })
    }, 500)
  }
}
