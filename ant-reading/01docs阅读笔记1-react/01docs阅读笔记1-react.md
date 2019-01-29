阅读开源项目首先是看 readme.md package.json 和 docs

antd 的文档非常完善，值得学习借鉴，且很多常见的问题通过查询阅读文档就已经能解决了

- **contributing.zh-CN** 贡献指南

- **customize-theme.zh-CN** 自定义主题

- **faq.zh-CN** FAQ

- **getting-started.zh-CN** FAQ

- **i18n.zh-CN.md** 国际化

antd 提供了一个 React 组件 LocaleProvider 用于全局配置国际化文案

```js
import zhCN from 'antd/lib/locale-provider/zh_CN';

return (
  <LocaleProvider locale={zhCN}>
    <App />
  </LocaleProvider>
);
```

- **introduce.zh-CN.md** 介绍

- **practical-projects.zh-CN.md** 本文会引导你使用 umi、dva 和 antd 从 0 开始创建一个简单应用

- **recommendation.zh-CN.md** 推荐

antd 是 Ant Design 设计规范的 React 实现，所以我们倾向于只提供符合该规范、且带有视觉展现的 UI 组件，也尽量不重复造轮子。我们推荐使用以下社区已有的优秀实现，与 antd 形成互补：

| 类型           | 推荐组件                                           |
| -------------- | -------------------------------------------------- |
| 路由           | react-router                                       |
| 布局           | @rebass/grid react-blocks react-flexbox-grid       |
| 拖拽           | react-beautiful-dnd react-dnd react-sortable-hoc   |
| 代码编辑器     | react-codemirror2 react-monaco-editor              |
| 富文本编辑器   | react-quill braft-editor                           |
| 拾色器         | rc-color-picker react-color                        |
| 响应式         | react-responsive react-media                       |
| 复制到剪贴板   | react-copy-to-clipboard                            |
| 页面           | meta 属性 react-helmet react-document-title        |
| 图标           | react-fa react-icons                               |
| 二维码         | qrcode.react                                       |
| 可视化图表     | BizCharts recharts victory                         |
| 可视化图编辑器 | GGEditor                                           |
| 顶部进度条     | nprogress                                          |
| 应用国际化     | react-intl                                         |
| 代码高亮       | react-syntax-highlighter                           |
| Markdown       | 渲染 react-markdown                                |
| 无限滚动       | react-virtualized antd-table-infinity              |
| 地图           | react-google-maps google-map-react react-amap 高德 |
| 右键菜单       | react-contextmenu react-contexify                  |
| Emoji          | emoji-mart                                         |
| 分割面板       | react-split-pane                                   |
| 图片裁切       | react-image-crop                                   |
| 趋势线         | react-sparklines                                   |
| 格式化输入     | text-mask                                          |
| 关键字高亮     | react-highlight-words                              |
| 动画           | react-move Ant Motion                              |

- **use-in-typescript.zh-CN.md** 使用 TypeScirpt

- **use-with-create-react-app.zh-CN.md** 使用 create-react-app

