<template>
	<usersList :users="female"></usersList>
</template>


<script>

	import { mapGetters } from "vuex";
	import usersList from "../components/UsersList";

	export default{
		computed:{
			...mapGetters(["female"]),
		},
	    components:{
			usersList,
		}
	}

</script>


<style lang="scss">



</style>
