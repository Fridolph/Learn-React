import React, {Component} from 'react'

function withPersistentData(WrappedComponent, key) {
  return class extends Component {
    componentWillMount() {
      localStorage.setItem('data', '我是data')
      let data = localStorage.getItem(key)
      this.setState({
        key: data
      })
    }
    render() {
      // 通过{...this.props}把传递给当前组件的属性继续传递给被包装的组件
      return <WrappedComponent data={this.state.data} {...this.props} />
    }
  }
}

class MyComponent extends Component {
  render() {
    return <div>MyComponent -> {this.props.data}</div>
  }
}

export const MyComponentWithPersistentData = withPersistentData(MyComponent, 'data')
// const MyComponentWithPersistentData = withPersistentData(MyComponent, 'name')
