<template>
	<div class="header">
		<NavContainer/>
		<div class="headerbg"></div>
	</div>
</template>
  
<script lang="ts">
import NavContainer from './NavContainer.vue';

export default {
	name: 'HeaderContainer',
	components: {
		NavContainer
	}
}
</script>
	
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.header {
	margin-inline: 30px;
	position: relative;
}
.headerbg {
	height: 100%;
	position: absolute;
	pointer-events: none;
	left: 0;
	top: 0;
	width: 100%;
	border-bottom: 2px solid white;	
	background-image: url(../assets/imgs/blur.png), radial-gradient(ellipse at 50% 100%, var(--main-text-alpha), transparent 70%);
	mask-image: radial-gradient(ellipse at 50% 100%,rgba(0,0,0,.5),transparent 70%);
}
</style>
  