import Vue from 'vue'
import App from './App'

//引入文件

//首页
import feedList from './pages/feed/feedList.vue'
Vue.component('feedList',feedList)

//个人中心
import me from './pages/me/me.vue'
Vue.component('me',me)

// import plugin from './pages/plugin/home.vue'
// Vue.component('plugin',plugin)

import cuCustom from './colorui/components/cu-custom.vue'
Vue.component('cu-custom',cuCustom)

//引入结束

Vue.config.productionTip = false

App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()
