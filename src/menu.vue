<template>
  <div v-show="visible" class="context-menu">
    <div v-for="(item, index) in list" :key="index" class="context-menu-item" @click.stop="clickHandler(item)">
      <div class="context-menu-item_ct">
        <renderVNode v-if="typeof item.text==='function'" :render-func="item.text"></renderVNode>
        <template v-else>
          {{ item.text }}
          <span v-if="item.children">&raquo;</span>
        </template>
      </div>
      <div class="context-menu-item_children" v-if="item.children">
        <ContextMenu :list="item.children" :visible="true"></ContextMenu>
      </div>
    </div>
  </div>
</template>

<script>

const renderVNode = {
  props: {
    renderFunc: {
      type: Function,
    }
  },
  render(h) {
    return this.renderFunc(h)
  }
}

export default {
  name: 'ContextMenu',
  components: {renderVNode},
  props: {
    visible: {
      type: Boolean,
      default: false
    },
    list: {
      type: Array,
      default: () => {
        return []
      }
    }
  },
  methods: {
    close() {
      this.$emit('hide')
    },
    clickHandler(item) {
      if (typeof item.onClick === 'function') {
        item.onClick()
      }
      this.close()
    }
  }
}
</script>

<style scoped lang="scss">
.context-menu {
  position: absolute;
  z-index: 999;
  background-color: #ecf0f1;
  //border-radius: 10px;
  //overflow: hidden;
  box-shadow: 0 3px 6px 0 rgba(51, 51, 51, 0.2);

  &-item {
    position: relative;
    line-height: 40px;
    font-size: 14px;

    white-space: nowrap;

    &:hover {
      & > .context-menu-item_children {
        display: block;
      }
    }

    &_ct {
      padding: 0 10px;

      &:hover {
        background-color: #007aff;
        color: #fff;
        cursor: pointer;
      }
    }

    &_children {
      display: none;
      position: absolute;
      right: 0;
      top: 0;
    }
  }
}
</style>
