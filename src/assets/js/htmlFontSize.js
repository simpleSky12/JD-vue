// 定义最大的 fontSize

const MAX_FONT_SIZE = 42

// 监听 html 文档被解析完成的事件
document.addEventListener('DOMContentLoaded', () => {
  // 获取 HTML 标签
  const html = document.querySelector('html')
  // 获取根元素 fontSize 标准，屏幕宽度除以10
  let fontSize = window.innerWidth / 10
  // 获取到的 fontSize 不允许超过我们设置的最大值
  fontSize = fontSize > MAX_FONT_SIZE ? MAX_FONT_SIZE : fontSize
  // 定义根元素 html 的 fontsize 大小，即 rem
  html.style.fontSize = fontSize + 'px'
})
