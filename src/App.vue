<template>
	<HeaderContainer></HeaderContainer>
	<img alt="Vue logo" src="./assets/logo.png">
	<HelloWorld msg="Welcome to Your Vue.js App"/>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import HeaderContainer from './components/HeaderContainer.vue'

export default {
	name: 'App',
	components: {
		HelloWorld,
		HeaderContainer
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
	--main-hot: #65F8B0;
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
	text-align: center;
}
</style>
