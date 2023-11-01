<template>
	<a class="navitem" :href="url">{{ name }}</a>
</template>
  
<script>
export default {
	name: 'NavItem',
	props: {
		name: String,
		url: String
	}
}
</script>
	
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	a {
		font-size: 24px;
		cursor: pointer;
		color: var(--main-text);
		transition: color 0.2s ease-out;
		text-decoration: none;
		position: relative;
	}
	a::after {
		content: '';
		position: absolute;
		background-color: var(--main-text);
		top: 100%;
		left: 0px;
		width: 0%;
		height: 4px;
		display: block;
		transition: width 0.3s ease-in-out, color 0.2s ease-out;
		border-radius: 2px;
	}
	a:hover {
		color: var(--main-hot);
	}
	a:hover::after {
		width: 100%;
		background-color: var(--main-hot);
	}
</style>
  