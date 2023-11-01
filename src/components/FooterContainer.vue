<template>
	<div class="footer">
		<div class="footerbg"></div>

		<h1>Thank you for the visit!</h1>
		<p>Be sure to follow me if you'd like to hear more.</p>
	</div>
</template>
  
<script lang="ts">
export default {
	name: 'FooterContainer',
	components: {}
}
</script>
	
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.footer {
	height: 400px;
	margin-inline: 30px;
	position: relative;
}
.footerbg {
	height: 400px;
	position: absolute;
	pointer-events: none;
	left: 0;
	top: 0;
	width: 100%;
	border-top: 2px solid white;	
	background-image: url(../assets/imgs/blur.png), radial-gradient(ellipse at 50% 0%, var(--main-text-alpha), transparent 70%);
	mask-image: radial-gradient(ellipse at 50% 0%,rgba(0,0,0,.5),transparent 70%);
}
h1 {
	margin: 0;
	padding-top: 100px;
	padding-left: 60px;
	color: var(--main-hot);
}
p {
	font-size: 20px;
	margin: 0;
	padding-top: 40px;
	padding-left: 60px;
}
</style>
  