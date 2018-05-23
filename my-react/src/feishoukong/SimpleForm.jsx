import React, {Component} from 'react'

export default class SimpleForm extends Component {
  handleSubmit = e => {
    console.log('提交', this.input.value)
    e.preventDefault()
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          title:
          <input type="text" defaultValue="测试一下" ref={input => this.input = input} />
        </label>
        <input type="submit" value="submit" />
      </form>
    )
  }
}

// ref的值是一个函数，该函数会接受当前元素作为参数，即例子的input参数指向的是当前元素。
// 通过把input赋值给了this.input，进而可以在组件的其他地方通过this.input获取这个元素

// 在使用非受控组件时，我们需要为相应的表单元素设置默认值，但无法通过表单元素的value设值
// 因为在非受控组件中，React无法控制表单的value属性。这种情况可使用defaultValue指定默认值
