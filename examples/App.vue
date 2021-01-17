<template>
  <div id="app">
    <div class="mb-base">
      <button v-contextmenu="{menuList}">右键菜单</button>
    </div>
    <div class="mb-base">
      <button v-contextmenu="{menuList:menuList2}">子菜单</button>
    </div>
    <div class="mb-base">
      <button v-contextmenu="{menuList:menuList3}">自定义内容</button>
    </div>
  </div>
</template>

<script>

export default {
  name: 'App',
  components: {},
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
    menuList2() {
      return [
        {
          text: '菜单1',
          onClick: () => {
            console.log(11)
          },
          children: [
            {text: '子菜单1'},
            {text: '子菜单2'},
            {
              text: '子菜单3',
              children: [
                {text: '三级子菜单'}
              ]
            },
          ]
        },
        {
          text: '菜单2', onClick: () => {
            console.log(22)
          }
        }
      ]
    },
    menuList3() {
      return [
        {
          text: (h) => {
            return h('span', {
              style: {color: 'red'}
            }, '自定义text render')
          },
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
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.mb-base {
  margin-bottom: 200px;
}
</style>
