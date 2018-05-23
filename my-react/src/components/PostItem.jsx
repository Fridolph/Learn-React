import React, {Component} from 'react'

export default class PostItem extends Component {
  constructor(props) {
    super(props)
    this.state = {
      editing: false
    }
  }
  // 处理点赞事件
  handleVote = () => {
    this.props.onVote(this.props.post.id)
  }
  // 保存/编辑按钮点击后的逻辑
  handleEditPost = () => {
    const editing = this.props.editing
    // 当前处于编辑状态，调用父组件传递的onSave方法保存帖子
    if (editing) {
      this.props.onSave({
        ...this.state.post,
        date: this.formatTime()
      })
    }
    this.setState({
      editing: !editing
    })
  }
  // 处理标题textarea值变化
  handleTitleChange = e => {
    const newPost = {...this.state.post, title: e.target.value}
    this.setState({
      post: newPost
    })
  }
  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }
  formatTime = () => {
    var date = new Date()
    return date.getFullYear() + '-' + (date.getMonth() + 0 + 1) + '-' + date.getDate() + ' ' + date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds()
  }

  render() {
    const {title, author, date, vote} = this.props.post
    return (
      <li>
        <div contentEditable={this.state.editing}>{title} <input type="checkbox" value={this.state.editing} name="checkbox" onChange={this.handleChange} /></div>
        <div>创建人：<span>{author}</span></div>
        <div>创建时间：<span>{date}</span></div>
        <div>
          <button onClick={this.handleVote}>点赞</button>
          <span>点赞数：{vote}</span>
        </div>
      </li>
    )
  }

  componentWillReceiveProps(nextProps) {
    // 父组件更新props后，更新postItem的state
    if (this.props.post !== nextProps.post) {
      this.setState({
        post: nextProps.post
      })
    }
  }
}
