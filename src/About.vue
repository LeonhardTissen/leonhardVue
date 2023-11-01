<template>
	<div></div>
</template>

<script>
export default {
	name: 'App',
	components: {

	}
}
</script>

<style>
@font-face {
	font-family: Geist;
	src: url(./assets/fonts/GeistVF.woff2) type(woff2);
}
:root {
	--main: #000000;
	--main-text: #EFE8EE;
	--main-text-alpha: #EFE8EE40;
	--main-hot: #65F8B0;
	--main-hot-alpha: #65F8B040;
}
body {
	color: var(--main-text);
	background-color: var(--main);
	margin: 0;
}
#app {
	font-family: Geist, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
}
</style>
