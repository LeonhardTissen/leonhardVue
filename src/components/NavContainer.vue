<template>
	<div class="navcontainer">
		<NavItem name="Home" url="home"/>
		<NavItem name="Goals" url="goals"/>
		<NavItem name="Projects" url="projects"/>
		<NavItem name="Certificates" url="certificates"/>
		<NavItem name="Contact" url="contact"/>
	</div>
</template>
  
<script lang="ts">
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
		padding-block: 20px;
	}
	@media screen and (max-width: 640px) {
		.navcontainer {
			flex-direction: column;
			align-items: start;
			gap: 10px;
		}
	}
</style>
  