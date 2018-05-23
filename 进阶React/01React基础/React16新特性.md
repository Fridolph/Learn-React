## render新的返回类型

返回数组

```jsx
class ListComponent extends Component {
  render() {
    return [
      <li key="a">a</li>
      <li key="b">b</li>
      <li key="c">c</li>
    ]
  }
}
```

返回字符串

```jsx
class StringComponent extends Component {
  render() {
    return 'Just a strings
  }
}
```

App 组件的render方法渲染 ListComponent 和 StringComponent

```jsx
export default class App extends Component {
  render() {
    return [
      <ul>
        <ListComponent />
      </ul>,
      <StringComponent />
    ]
  }
}
```

---

## 错误处理

16版本前，组件运行期间执行错误会阻塞应用渲染。16引入新的错误处理机制，组件抛错时，会就爱你个组件从组件树中卸载，从而避免整个应用的崩溃。

16还提供了一种更友好的错误处理方式——错误边界。错误边界是能够捕获子组件的错误并对其优雅处理的组件，输出错误日志、显示出错提示等这比卸载组件更友好

定义了 componentDidCatch(error, info) 方法的组件将成为一个错误边界，现在我们创建一个组件ErrorBoundary

```jsx
class ErrorBoundary extends Component {
  constructor(props) {
    super(props)
    this.state = {hasError: false}
  }
  componentDidCatch(error, info) {
    // 显示错误UI
    this.setState({ hasError: true })
    // 同时输出错误日志
    console.log(error, info)
  }
  render() {
    if (this.state.hasError) {
      return <h1>Oopts, something went wrong.</h1>
    }
    return this.props.children
  }
}
```

然后在App中使用ErrorBoundary

```jsx
class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      user: { name: 'react' }
    }
  }
  // 将user置为null，模拟异常
  onClick = () => {
    this.setState({ user: null })
  }
  render() {
    return (
      <div>
        <ErrorBoundary>
          <Profile user={this.state.user} />
        </ErrorBoundary>
        <button onClick={this.onClick}>更新</button>
      </div>
    )
  }
}

const Profile = ({user}) => <div>name: {user.name}</div>
```

点击更新按钮后，Profile接受的属性user为null，程序会抛错TypeError，这个错误被ErrorBoundary捕获，并在界面上显示出错提示

## Portals

Portals特性让我们可以把组件渲染到当前组件树以外的DOM节点上。该特性的典型应用场景是，渲染应用的全局弹框，使用Portals后，任意组件都可以将弹框组件渲染到根节点上，以方便弹框的显示。Portals的实现依赖于ReactDOM的一个新API

    ReactDOM.createPortal(child, container)

第一个参数child是可以被渲染的React节点，例如React元素、由React元素组成的数组、字符串等。
container是一个DOM元素，child将被挂载到这个DOM节点

```jsx
class Modal extends Component {
  constructor(props) {
    super(props)
    // 根节点下创建一个div节点
    this.container = document.createElement('div')
    document.body.appendChild(this.container)
  }
  render() {
    return ReactDOM.createPortal(
      <div className="modal">
        <span className="close" onClick={this.props.onClose}>&times;</span>
        <div className="content">
          {this.props.children}
        </div>
      </div>,
      this.container
    )
  }
  componentWillUnmount() {
    document.body.removeChild(this.container)
  }
}
```

在App中使用Modal

```jsx
export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {showModal: true}
  }
  closeModal = () => {
    this.setState({showModal: false})
  }
  render() {
    return (
      <div>
        <h2>Dashboard</h2>
        {this.state.showModal && (
          <Modal onClose={this.closeModal}>Modal Dialog</Modal>
        )}
      </div>
    )
  }
}
```

## 自定义DOM属性

16版 React会把不识别的属性传递给DOM元素。例如， 在16前，下面的React元素

    <div custom-attribute="something" />

在浏览器中渲染出的DOM节点为：

    <div />

而React16版渲染出的DOM节点为：

    <div custom-attribute="something" />

---

这里介绍了16的新特性，包括render方法新支持的返回类型、新的错误处理机制和Error Boundary组件，可以将组件挂载到任意DOM树的Portals特性以及自定义DOM属性的支持。

基于新的fiber架构。还有如 setState传入null不触发组件更新，更加高效的服务端渲染等方式等。
