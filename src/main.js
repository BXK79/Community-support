Vue.config.devtools = true
    //入口文件
import Vue from 'vue'

// 按需导入 Mint-UI组件
import { Header } from 'mint-ui'
Vue.component(Header.name, Header)

import app from './App.vue'

// 导入 MUI 的样式
import './lib/mui/css/mui.min.css'


var vm = new Vue({
    el: '#app',
    render: c => c(app) // render 会把 el 指定的容器中，所有的内容都清空覆盖，所以 不要 把 路由的 router-view 和 router-link 直接写到 el 所控制的元素中

})