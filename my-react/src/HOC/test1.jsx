import React, {Component} from 'react'

function withControlledState(WrappedComponent) {
  return class extends Component {
    constructor() {
      super()
      this.state = {
        value: ''
      }
    }
    handleValueChange = e => {
      this.setState({
        value: e.target.value
      })
    }
    render() {
      // newProps保存受控组件需要使用的属性和事件处理函数
      const newProps = {
        controlledProps: {
          value: this.state.value,
          onChange: this.handleValueChange
        }
      }
      return <WrappedComponent {...this.props} {...newProps} />
    }
  }
}

class SimpleControlledComponent extends Component {
  render() {
    // 此时的SimpleControlledComponent 为无状态组件，状态由高阶组件维护
    return <input name="simple" {...this.props.controlledProps} />
  }
}

export const ComponentWithControlledState = withControlledState(SimpleControlledComponent)
