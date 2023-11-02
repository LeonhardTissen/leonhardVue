<template>
	<div id="contactme">
		<div id="textside">
			<h1>Please contact me at the following e-mail.</h1>
			<p>I'd love to hear from you!</p>
			
			<a href="mailto:contact@warze.org">contact@warze.org</a>
		</div>
		<img src="../assets/imgs/emailwings.svg">
	</div>
</template>
  
<script lang="ts">
export default {
	name: 'ContactMe',
}
</script>
	
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#contactme {
	padding: 10vw;
	display: flex;
	justify-content: space-between;
	align-items: center;
}

p {
	color: var(--main-hot);
}

a {
	color: white;
	text-decoration: none;
	font-size: 24px;
	margin-block: 40px;
	display: block;
}

img {
	height: 200px;
}
</style>
  