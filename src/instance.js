export default function init(Vue, MenuComponent) {
    function newInstance() {
        const Instance = new Vue({
            data() {
                return {
                    list: [],
                    style: {},
                    visible: false
                }
            },
            mounted() {
                document.addEventListener('click', this.hide)
                document.addEventListener('contextmenu', this.hide)
            },
            beforeDestroy() {
                document.removeEventListener('click', this.hide)
                document.removeEventListener('contextmenu', this.hide)
            },
            methods: {
                show(list, style) {
                    this.list = list
                    this.style = style
                    this.visible = true
                },
                hide() {
                    this.visible = false
                }
            },
            render(h) {
                return h(MenuComponent, {
                    style: this.style,
                    props: {
                        visible: this.visible,
                        list: this.list
                    },
                    on: {
                        hide: this.hide
                    }
                })
            }
        })
        const el = Instance.$mount()
        document.body.appendChild(el.$el)
        return el
    }

    let instance

    return function getInstance() {
        if (!instance) {
            instance = newInstance()
        }
        return instance
    }
}

