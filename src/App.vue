<template>
	<HeaderContainer/>
	<div class="page selected" id="home">
		<LandingShow/>
	</div>
	<div class="page selected" id="goals">
		<MyGoals/>
	</div>
	<div class="page selected" id="projects">
		<MyProjects/>
	</div>
	<div class="page" id="certificates">
		<MyCertificates/>
	</div>
	<div class="page selected" id="contact">
		<ContactMe/>
	</div>
	<FooterContainer/>
</template>

<script lang="ts">
import HeaderContainer from './components/HeaderContainer.vue'
import FooterContainer from './components/FooterContainer.vue'
import LandingShow from './components/LandingShow.vue';
import MyGoals from './components/MyGoals.vue';
import MyProjects from './components/MyProjects.vue';
import ContactMe from './components/ContactMe.vue';
import MyCertificates from './components/MyCertificates.vue';

export default {
	name: 'App',
	components: {
		HeaderContainer,
		LandingShow,
		MyGoals,
		MyProjects,
		FooterContainer,
		ContactMe,
		MyCertificates
	}
}
</script>

<style>
@font-face {
	font-family: Geist;
	src: url(./assets/fonts/GeistVF.woff2) format(woff2);
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
	font-weight: 100;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
}
.page {
	display: none;
}
.page.selected {
	display: block;
}
a {
	color: var(--main-hot);
}
</style>
