<template>
	<div id="socialicons">
		<SocialIcon icon="github" alt="GitHub" url="//github.com/LeonhardTissen"/>
		<SocialIcon icon="gitlab" alt="GitLab" url="//gitlab.com/LeonhardTissen"/>
		<SocialIcon icon="linkedin" alt="LinkedIn" url="//www.linkedin.com/in/leonhard-tissen/"/>
		<SocialIcon icon="x" alt="Twitter / X" url="//twitter.com/leonhard_tissen"/>
		<SocialIcon icon="mastodon" alt="Mastodon" url="//mastodon.social/@leonhardtissen"/>
		<SocialIcon icon="website" alt="Warze.org" url="//warze.org"/>
		<SocialIcon icon="email" alt="E-mail" url="mailto:contact@warze.org"/>
	</div>
</template>
  
<script lang="ts">
import SocialIcon from './SocialIcon.vue';

export default {
	name: 'SocialIcons',
	props: {
		msg: String
	},
	components: {
		SocialIcon
	}
}
</script>
	
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#socialicons {
	display: flex;
	gap: 16px;
	margin-block: 4px;
	flex-wrap: wrap;
}
.socialicon {
	width: 40px;
	transition: filter 0.1s linear, transform 0.12s ease-out;
}
.socialicon:hover {
	filter: sepia(1) saturate(10) hue-rotate(60deg);
	transform: scale(1.2);
}
@media screen and (max-width: 640px) {
	#socialicons {
		gap: 8px;
		justify-content: center;
	}
}
</style>
  