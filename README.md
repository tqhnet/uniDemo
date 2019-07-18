# uniDemo
### 前言
准备跨平台开发一个项目使用`Uni`
UI框架使用`ColorUI`
### 内容
* `ColorUI`是自定义的导航条和tabbar
主要就是在index.vue里面装了几个子vue

隐藏导航栏将index设置为第一个显示页面
```
{
	"pages": [ //pages数组中第一项表示应用启动页，参考：https://uniapp.dcloud.io/collocation/pages
		{
			"path": "pages/index/index",
			"style": {}
		},
		{
			"path": "pages/feed/feedList",
			"style": {}
		},
		{
			"path": "pages/me/me",
			"style": {}
		},
		{
			"path": "pages/detail/detail",
			"style": {}
		}
	],
	"globalStyle": {
		"mp-alipay": {
			/* 支付宝小程序特有相关 */
			"transparentTitle": "always",
			"allowsBounceVertical": "NO"
		},
		"navigationBarBackgroundColor": "#0081ff",
		"navigationBarTitleText": "ColorUi for UniApp",
		"navigationStyle": "custom",
		"navigationBarTextStyle": "white"
	}
}
```
vue中引入ColorUI样式
main中添加ColorUI组件，也添加上自己需要在首页显示的几个页面的组件
```
//首页
import feedList from './pages/feed/feedList.vue'
Vue.component('feedList',feedList)

//个人中心
import me from './pages/me/me.vue'
Vue.component('me',me)

import cuCustom from './colorui/components/cu-custom.vue'
Vue.component('cu-custom',cuCustom)
```
index.vue
```
<template>
	<view>
		<!-- 在main中修改 -->
		<feedList v-if="PageCur=='feedList'"></feedList>
		<me v-if="PageCur=='me'"></me>
		<view class="cu-bar tabbar bg-white shadow foot">
			<view class="action" @click="NavChange" data-cur="feedList">
				<view class='cuIcon-cu-image'>
					<image :src="'/static/tabbar/basics' + [PageCur=='feedList'?'_cur':''] + '.png'"></image>
				</view>
				<view :class="PageCur=='feedList'?'text-green':'text-gray'">首页</view>
			</view>
			<view class="action" @click="NavChange" data-cur="me">
				<view class='cuIcon-cu-image'>
					<image :src="'/static/tabbar/component' + [PageCur == 'me'?'_cur':''] + '.png'"></image>
				</view>
				<view :class="PageCur=='me'?'text-green':'text-gray'">我的</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
		return {
				PageCur: 'feedList'
			}
		},
		methods: {
			NavChange: function(e) {
				this.PageCur = e.currentTarget.dataset.cur
			}
		}
	}
</script>

<style>

</style>
```

### 效果
![CD8E027B-2587-4818-AA6A-0C5B9023B8F2.png](https://upload-images.jianshu.io/upload_images/436419-2f4fcb2eba579612.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

### 更多
[Uni-App](https://uniapp.dcloud.io/README)
[ColorUI](https://github.com/weilanwl/ColorUI)
[iDemo](https://github.com/tqhnet/uniDemo)