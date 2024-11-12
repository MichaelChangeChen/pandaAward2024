<template>
	<div class="main-page">
		<div class="banner">
			<v-img src="/public/20241106_foopanda_banner 1.jpg" cover/>
			<div class="friend-txt">品牌好友9m88</div>
		</div>
		<Panda />
	</div>
</template>

<style lang="scss" scoped>
.main-page {
	.banner {
		position: relative;
		.friend-txt {
			position: absolute;
			bottom: 30px;
			left: 50px;
			user-select: none;
		}
	}
}
</style>
<script >
import Panda from './components/Panda.vue'
export default {
	components: {
		Panda
	},
	data(){
		return {

		}
	},
	mounted(){

	},
	methods: {

	}
}
</script>