import Menu from "./menu";
import init from './instance'

export default {
    install(Vue, {name = 'contextmenu', menuComponent = Menu} = {}) {

        const getInstance = init(Vue, menuComponent)

        const contextMenu = {
            bind(el, binding) {
                const instance = getInstance()

                el.addEventListener('contextmenu', function (e) {
                    const {menuList, onShow} = binding.value
                    if (typeof onShow === 'function') {
                        onShow()
                    }

                    // 在指定位置展示
                    const oX = e.clientX
                    const oY = e.clientY
                    instance.show(menuList, {
                        left: oX + 'px',
                        top: oY + 'px'
                    })
                    e.preventDefault()
                    e.stopPropagation()
                })
            }
        }
        Vue.directive(name, contextMenu)
    }
}

