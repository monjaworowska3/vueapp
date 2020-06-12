<template>
	<usersList :users="male"></usersList>
</template>

<script>

	import { mapGetters } from "vuex";
	import usersList from "../components/UsersList";

	export default{
		computed:{
			...mapGetters(["male"]),
		},
		components:{
			usersList,
		}
	}

</script>

<style lang="scss">


</style>
