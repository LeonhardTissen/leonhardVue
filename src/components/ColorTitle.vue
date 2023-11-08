<template>
	<h1 id="colortitle">
		<span style="--offset: -6s">L</span>
		<span style="--offset: -5.6s">E</span>
		<span style="--offset: -5.2s">O</span>
		<span style="--offset: -4.8s">N</span>
		<span style="--offset: -4.4s">H</span>
		<span style="--offset: -4s">A</span>
		<span style="--offset: -3.6s">R</span>
		<span style="--offset: -3.2s">D</span>
		<div id="break"/>
		<span style="--offset: -2.8s;"></span>
		<span style="--offset: -2.4s">T</span>
		<span style="--offset: -2s">I</span>
		<span style="--offset: -1.6s">S</span>
		<span style="--offset: -1.2s">S</span>
		<span style="--offset: -0.8s">E</span>
		<span style="--offset: -0.4s">N</span>
	</h1>
</template>
  
<script lang="ts">
export default {
	name: 'ColorTitle'
}
</script>
	
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@font-face {
	font-family: Nabla;
	src: url(../assets/fonts/Nabla-stripped.ttf);
}
h1 {
	white-space: nowrap;
	font-size: 72px;
	font-family: Nabla;
	filter: hue-rotate(90deg);
	margin: 0;
}
span {
	display: inline-block;
	animation: bobUpDown 2s ease-in-out infinite alternate var(--offset);
}
@keyframes bobUpDown {
	0% {
		transform: translateY(10px);
		text-shadow: 0px 2px 3px black;
	}
	100% {
		transform: translateY(-10px);
		text-shadow: 0px 20px 10px black;
	}
}
#break {
	display: inline-block;
	width: 20px;
}
@media screen and (max-width: 920px) {
	#break {
		display: block;
	}
}
@media screen and (max-width: 640px) {
	h1 {
		font-size: 54px;
		text-align: center;
	}
	h1 span {
		animation: none;
	}
}
@media screen and (max-width: 320px) {
	h1 {
		font-size: 48px;
	}
}
</style>
  