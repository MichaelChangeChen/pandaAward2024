<template>
	<v-overlay 
		v-model="setSwitch" 
		opacity="0.8"
		class="loading-over"
		z-index="99999"
		persistent >
		<v-progress-circular
			class="load"
			color="pink-darken-1"
			:size="200"
			:width="12"
			indeterminate>
			載入中...
		</v-progress-circular>
	</v-overlay>
</template>
<script>
export default {
	props: {
		isLoading: {
			type: Boolean,
			require: true,
		}
	},
	data() {
		return {
			setSwitch: false
		}
	},
	watch: {
		isLoading(e) {
			if(e)
				this.setSwitch = true;
			else
				this.setSwitch = false;
		}
	}
}
</script>
<style lang="scss" scoped>
	.loading-over {
		position: fixed;
		top: calc(50% - 100px);
		left: calc(50% - 100px);
		font-size: 28px;
		font-weight: bold;
		text-shadow: 0 0 1px rgb(159, 159, 159);
	}
</style>