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