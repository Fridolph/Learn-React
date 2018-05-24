React之所以执行效率高，其重要原因是虚拟DOM机制。React应用常用的性能优化也与虚拟DOM机制有关。

---

在Web环境中，DOM也就是对HTML文本的一种抽象描述。在传统开发中，通过调用浏览器提供API对DOM执行增删查改操作。这些操作看似只执行了一条JS语法，但其效率要慢得多。因为对DOM的修改会引起页面的重布局和重渲染，这过程很耗时，这也是前端性能优化的一条原则，尽量减少DOM操作。

虚拟DOM是一层抽象（对真实DOM），建立在真实的DOM上。（虚拟DOM是一项独立的技术）

    <div class="foo">
      <h1>Hello React</h1>
    </div>

可以用JS对象来描述

```js
{
  type: 'div',
  props: {
    className: 'foo',
    children: {
      type: 'h1',
      props: {
        children: 'Hello React'
      }
    }
  }
}
```

有了虚拟DOM这一层，当我们需要操作DOM时，就可以操作虚拟DOM而不是操作真实DOM。

## Diff算法

React采用声明式地API描述UI结构，每次组件的状态或属性更新，组件的render方法都会返回一个新的虚拟DOM对象，用来表述新的UI结构。如果每次render都直接使用新的虚拟DOM来生成真实DOM结构，那么会带来大量对真实DOM的操作，影响执行效率。

事实上，React通过比较两次虚拟DOM的变化找出差异部分，更新到真实DOM上，从而减少最终要在真实DOM上执行的操作，提高程序执行效率。这一过程就是React的调和过程Reconcliliation，其中的关键就是比较两个树型结构的diff算法。

> 在diff算法中，比较的两方是新的虚拟DOM和旧的虚拟DOM，而表示虚拟DOM和真实DOM，只不过Diff的结果会更新到真实的DOM上。

正常情况下，比较两个树形结构差异的算法时间复杂度是O(N^3)。React通过总结DOM的实际使用场景提出了两个在绝大多数实践场景下都成立的假设，基于这两个假设，React实现了O(N)时间复杂度内完整两棵虚拟DOM树的比较：

1. 如果两个元素的类型不同，那么它们将生成两棵不同的树
2. 为列表中的元素设置key，用key标识对应的元素在多次render过程中是否发生变化

### 当根节点是不同类型时

从div变成p，ComponentA变成ComponentB，或者从ComponentA变成div这些都是节点类型发生变化的情况。

根节点类型变化，React会认为新的树和旧的树完全不同，不会再继续比较其他属性和子节点，而是把整棵树拆掉重建（包括虚拟DOM树和真实DOM树）。需要注意的是，虚拟DOM节点类型分为两类：一类是DOM元素类型，一类是React组件类型。

在旧的虚拟DOM树被拆除过程中，旧的DOM元素类型的节点会被销毁，旧的React组件的实例componentWillUnmount会被调用，在重建过程中，新的DOM元素会被插入到DOM树中，新的组件实例的componentWillMount和componentDidMount方法会被调用。重建后的新的虚拟DOM树会被整体更新到真实DOM树中，这种情况需要大量DOM操作，更新效率最低。

### 当根节点是相同的DOM元素类型时

React会保留根节点，而比较根节点的属性，然后只更新那些变化了的属性。

### 当根节点是相同的组件类型时

对应的组件实例不会被销毁，只是会执行更新操作，同步变化的属性到虚拟DOM树上，这一过程组件实例的componentWillReceiveProps和componentWillUpdate会被调用。注意，对于组件类型的节点，React是无法直接知道如何更新真实DOM树的，需要在组件更新并且render方法执行完成后，根据render返回的虚拟DOM结构决定如何更新真实DOM树。

比较完根节点后，React会以同样的原则继续递归比较子节点，每一个子节点相对于其层级以下的节点来说又是一个根节点。如此递归比较，直到比较完两棵树上的所有节点，计算得到最终差异，更新到DOM树中。
