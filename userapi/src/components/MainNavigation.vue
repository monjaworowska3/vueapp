<template>

	<nav>
		<ul>
			<li><router-link to="/">Users</router-link></li>
			<li><router-link to="/male">Male</router-link></li>
			<li><router-link to="/female">Female</router-link></li>
			<li><router-link to="/search">Search</router-link></li>
		</ul>
	</nav>

</template>

<script>
	export default{
	}
</script>

<style lang="scss" scoped>

	li{
		list-style: none;
		display: inline-block;
		padding: 10px;
		margin-right: 20px;
		border-right: 1px solid #000;
		border-bottom: 1px solid #000;
		font-size: 1.5em;
		& a{
			text-decoration: none;
			color: inherit;
		}
	}

</style>
