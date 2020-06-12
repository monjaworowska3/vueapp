<template>

	<div>
		<mainNavigation></mainNavigation>
		<router-view></router-view>
	</div>

</template>

<script>

	import mainNavigation from "./components/MainNavigation";

	export default{
		components:{
			mainNavigation,
		}
	}

</script>

<style lang="scss">


</style>
