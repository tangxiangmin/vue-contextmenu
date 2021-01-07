<template>
  <div id="app">
    <button v-contextmenu="{menuList}">右键菜单</button>
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
</style>
