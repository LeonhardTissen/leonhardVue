<template>
	<a :href="url" class="social">
		<img :src="'/icons/' + icon + '.svg'" :alt="alt" class="socialicon">
	</a>
</template>
  
<script>
export default {
	props: {
		icon: String, // The source of the social icon image
		alt: String, // The alt text for the social icon image
		url: String // The URL the icon links to
	}
}
</script>
  
<style scoped>
	.socialicon {
		width: 40px;
		transition: filter 0.1s linear, transform 0.12s ease-out;
	}
	.socialicon:hover {
		filter: sepia(1) saturate(10) hue-rotate(60deg);
		transform: scale(1.2);
	}
</style>
