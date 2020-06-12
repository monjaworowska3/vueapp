<template>
	<usersList :users="users"></usersList>
</template>

<script>

	import { mapActions, mapGetters } from "vuex";
	import usersList from "../components/UsersList";

	export default{
		computed:{
			...mapGetters(["users"]),
		},
		components:{
			usersList,
		},
		created(){
			this.fetchUsers();
		},
		methods:{
			...mapActions(["setUsers"]),
			fetchUsers(){
				const url = "https://randomuser.me/api/?results=4&seed=foobar3";
				fetch(url).
					then(response => response.json()).
					then(users => this.setUsers(users));
			}
		}
	}

</script>


<style lang="scss">


</style>
