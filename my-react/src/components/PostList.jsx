import React, {Component} from 'react'
import PostItem from './PostItem'

class PostList extends Component {
  constructor() {
    super()
    this.state = {
      posts: []
    }
    this.timer = null
  }

  handleVote = id => {
    // 根据帖子id进行过滤，找到待修改vote属性的帖子，返回新的post列表
    const posts = this.state.posts.map(item => {
      const newItem = item.id === id ? {...item, vote: ++item.vote} : item
      return newItem
    })
    // 使用新的posts对象设置state
    this.setState({
      posts
    })
  }

  handleSave = post => {
    const posts = this.state.posts.map(item => {
      const newItem = item.id === post.id ? post : item
      return newItem
    })
    this.setState({
      posts
    })
  }

  render() {
    return (
      <div>
        帖子列表：
        <ul>
          {this.state.posts.map(v => (
            <PostItem
              key={v.id}
              post={v}
              onVote={this.handleVote}
              onSave={this.handleSave}
            />
          ))}
        </ul>
      </div>
    )
  }

  componentDidMount() {
    this.timer = setTimeout(() => {
      this.setState({
        posts: [
          {
            id: 1,
            title: '大家一起来讨论React吧',
            author: 'fri',
            date: '2018-05-22 10:00:00',
            vote: 0
          },
          {
            id: 2,
            title: '前端三大框架，你最爱谁',
            author: 'yk',
            date: '2018-05-22 10:02:00',
            vote: 1
          },
          {
            id: 3,
            title: 'App的时代已经到来',
            author: 'xxj',
            date: '2018-05-22 10:05:00',
            vote: 2
          }
        ]
      })
    }, 100)
  }

  componentWillUnmount() {
    if (this.timer) {
      clearTimeout(this.timer)
    }
  }
}

export default PostList
