<template>
	<div>
		<h3>{{ user.name.title }} {{ user.name.first }} {{ user.name.last }}</h3>
		<p>{{ user.location.city }}, {{ user.location.state }} {{ user.location.postcode }}</p>
	</div>
</template>


<script>

export default{

	props:["user"],
}

</script>

<style lang="scss" scoped>

	div{
		width: 450px;
		margin: 0 auto;
		padding: 10px;
		background-color: beige;
	}

</style>
