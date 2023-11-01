<template>
	<HeaderContainer/>
	<div class="page selected" id="main">
		<LandingShow/>
	</div>
	<div class="page" id="about">

	</div>
	<div class="page" id="projects">

	</div>
	<div class="page" id="experience">

	</div>
	<div class="page" id="contact">

	</div>
</template>

<script>
import HeaderContainer from './components/HeaderContainer.vue'
import LandingShow from './components/LandingShow.vue';

export default {
	name: 'App',
	components: {
		HeaderContainer,
		LandingShow
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
.page {
	display: none;
}
.page.selected {
	display: block;
}
</style>
