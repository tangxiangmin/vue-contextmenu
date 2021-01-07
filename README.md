# vue-contextmenu

![](http://img.shymean.com/oPic/1610031463414_19.png)

## 引入依赖
```js
// 引入默认菜单样式，如果使用自定义菜单组件则无需引入
import '@shymean/vue-contextmenu.css'

import contextmenu from '@shymean/vue-contextmenu'

// 注册全局 v-contextmenu 指令
Vue.use(contextmenu, options = {})
```
支持注册参数
* `name` 指令名称, 默认`contextmenu`
* `menuComponent`菜单组件，默认使用内置的`Menu`组件，可传入自定义菜单组件展示

自定义组件接收下面props，然后通过插件配置项传入即可
```js
props: {
    // 菜单是否展示
    visible: {
      type: Boolean,
      default: false
    },
    // 菜单列表
    list: {
      type: Array,
      default: () => {
        return []
      }
    }
},
```

## 使用指令
```vue
<template>
  <div id="app">
    <button v-contextmenu="{menuList, onShow}">右键菜单</button>
  </div>
</template>

<script>

export default {
  name: 'App',
  computed: {
    menuList() {
      return [
        {
          text: '菜单1',
          onClick: () => {
            console.log(1)
          }
        },
        {
          text: '菜单2', onClick: () => {
            console.log(2)
          }
        }
      ]
    },
  },
  methods:{
    onShow(){
      // init
    }
  }
}
</script>
```
支持binding传值
* `menuList`，菜单列表，格式如下
    * `text` 菜单名称
    * `onClick` 点击事件
* `onShow`，钩子函数，在菜单展示时触发

## 开发文档

[Vue右键菜单指令](https://www.shymean.com/article/Vue右键菜单指令)
