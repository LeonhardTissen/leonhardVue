<template>
	<div class="navcontainer">
		<NavItem name="Main" url="main"/>
		<NavItem name="About" url="about"/>
		<NavItem name="Projects" url="projects"/>
		<NavItem name="Experiece" url="experience"/>
		<NavItem name="Contact" url="contact"/>
	</div>
</template>
  
<script>
import NavItem from './NavItem.vue';

export default {
	name: 'NavContainer',
	components: {
		NavItem
	}
}
</script>
	
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	.navcontainer {
		display: flex;
		height: 100%;
		justify-content: center;
		align-items: center;
		gap: 1vw;
	}
</style>
  