<template>
	<div>
		<User v-for="user in users" :user = "user"></User>
	</div>
</template>


<script>

	import User from "../components/User";

	export default{
		props:["users"],
		components:{
			User,
		}
	}

</script>
