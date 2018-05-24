绝大部分场景应避免使用ref，因为它破坏了React中以props为数据传递介质的典型数据流。

下面介绍下ref的常用使用场景

## 在DOM上使用ref

ref接受一个回调函数作为值，在组件被挂载或卸载时，回调函数会被调用，在组件被挂载时，回调函数会接受当前DOM元素作为参数；组件被卸载时回调函数会接受null作为参数

```jsx
class AutoFocusTextInput extends Component {
  render() {
    return (
      <div>
        <input type="text" ref={input => this.textInput = input} />
      </div>
    )
  }
  componentDidMount() {
    // 通过ref让input自动获取焦点
    this.textInput.focus()
  }
}
```

AutoFocusTextInput中为input定义ref，在组件挂载后，通过ref获取input元素，让其自动获取焦点，否则就很难实现该功能

### 在组件上使用ref

例，在使用AutoFocusTextInput组件的外部组件Containter中控制：

```jsx
class AutoFocusTextInput extends Component {
  constructor() {
    super()
  }
  blur = () => {
    this.textInput.blur()
  }
  render() {
    return (
      <div>
        <input type="text" ref={input => this.textInput = input} />
      </div>
    )
  }
}

// AutoFocusTextInputContainer.jsx
class AutoFocusTextInputContainer extends Component {
  handleClick = () => {
    // 通过ref调用 组件的方法
    this.inputInstance.blur()
  }
  render() {
    return (
      <div>
        <AutoFocusTextInput ref={this.inputInstance = input} />
        <button onClick={this.handleClick}>失去焦点</button>
      </div>
    )
  }
}
```

通过ref获取到了AutoFocusTextInput组件的实例对象，并把它赋值给Container的inputInstance属性，这样就可以通过inputInstance调用AutoFocusTextInput中的blur方法，让已经处于获取焦点状态的input失去焦点。

### 父组件访问子组件的DOM节点

某些场景可能会需要。例如父组件需知道这个DOM元素的尺寸或位置信息，直接使用ref是无法实现的。

这时，可在子组件的DOM元素上定义ref，ref的值是父组件传递给子组件的一个回调函数，回调函数可以通过一个自定义的属性传递，例如inputRef, 这样父组件的回调函数中就能获取到这个DOM元素

```jsx
function Children(props) {
  // 子组件使用父组件传递的inputRef, 为input的ref赋值
  return (
    <div>
      <input ref={props.inputRef} />
    </div>
  )
}

class Parent extends Component {
  render() {
    // 自定义一个属性inputRef，值是一个函数
    return (
      <Children inputRef={el => this.inputElement = el} />
    )
  }
}
```

从该例中还可发现，即时子组件是函数组件，这种方式同样有效。

---
