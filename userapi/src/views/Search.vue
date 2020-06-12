<template>

	<div>
		<input type="text" placeholder="Search by last name..." v-model="searchTerm" @input="search">
		<usersList :users="results"></usersList>
	</div>

</template>

<script>

	import { mapGetters } from "vuex";
	import usersList from "../components/UsersList";

	export default{
		data(){
			return{
				searchTerm: "",
				results: [],
			}
		},
		computed:{
			...mapGetters(["users"]),
		},
		methods:{
			search(){
				this.results = this.users.filter(user => user.name.last.toLowerCase().includes(this.searchTerm.toLowerCase()));
			},
		},
		components:{
			usersList,
		},
	}

</script>

<style lang="scss" scoped>

	input{
		display: block;
		padding: 5px;
		margin: 10px auto;
	}

</style>
