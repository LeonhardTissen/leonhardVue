<template>
	<div id="landingshow">
		<img id="leonhard" src="../assets/imgs/leo2_zoom_normal.jpg">
		<div id="intro">
			<ColorTitle/>

			<p>Professional <span>web developer</span> with 7 years of experience</p>

			<div id="socialicons">
				<SocialIcon icon="github" alt="GitHub" url="//github.com/WarzeEgg"/>
				<SocialIcon icon="gitlab" alt="GitLab" url="//gitlab.com/WarzeEgg"/>
				<SocialIcon icon="linkedin" alt="LinkedIn" url="//www.linkedin.com/in/leonhard-tissen/"/>
				<SocialIcon icon="x" alt="Twitter / X" url="//twitter.com/leonhard_tissen"/>
				<SocialIcon icon="website" alt="Warze.org" url="//warze.org"/>
				<SocialIcon icon="email" alt="E-mail" url="mailto:contact@warze.org"/>
			</div>
		</div>
		<div id="bg"></div>
	</div>
</template>
  
<script lang="ts">
import ColorTitle from './ColorTitle.vue';
import SocialIcon from './SocialIcon.vue';

export default {
    name: 'LandingShow',
    components: {
		ColorTitle,
		SocialIcon
	}
}
</script>
	
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#landingshow {
	position: relative;
	justify-content: center;
	display: flex;
	padding-block: min(200px, 15vw);
	padding-inline: 40px;
}
#leonhard {
	filter: sepia(80%) hue-rotate(80deg) saturate(1.2);
	width: 20vw;
	height: 20vw;
	border-radius: 30%;
	margin-right: 20px;
	max-width: 300px;
	max-height: 300px;
}
#bg {
	height: 100%;
	position: absolute;
	pointer-events: none;
	left: 0;
	top: 0;
	width: 100%;
	z-index: -1;
	background-image: url(../assets/imgs/grid.webp), radial-gradient(ellipse at 75% 25%, var(--main-hot-alpha), transparent 70%);
	-webkit-mask-image: radial-gradient(ellipse at 30% 70%,rgba(0,0,0,.5),transparent 70%);
}
#intro {
	display: flex;
	flex-direction: column;
	justify-content: space-around;
}
p {
	font-size: 24px;
	margin: 0;
}
span {
	color: var(--main-hot);
}
#socialicons {
	display: flex;
	gap: 16px;
	margin-block: 4px;
}
.socialicon {
	width: 40px;
	transition: filter 0.1s linear, transform 0.12s ease-out;
}
.socialicon:hover {
	filter: sepia(1) saturate(10) hue-rotate(60deg);
	transform: scale(1.2);
}
</style>
  