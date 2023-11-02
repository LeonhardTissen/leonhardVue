<template>
	<div id="myprojects">
		<div v-for="(project, index) in projectDatabase" class="project" :key="index">
			<a class="name" :href="project.link" target="_blank">
				<img class="banner" :src="'/works/' + project.image" :alt="project.name">
				{{ project.name }}
			</a>
			<p class="description">{{ project.description }}</p>
			<div class="content" v-html="project.content" @click="handleClick"></div>
			<div class="tags">
				<div v-for="(tag, tagindex) in project.tags" :key="tagindex" class="tag">{{ tag }}</div>
			</div>
			<div class="bg"></div>
		</div>
	</div>
</template>
  
<script lang="ts">
import { projectDatabase } from '@/projects';

export default {
	name: 'MyProjects',
	data() {
		return {
			projectDatabase
		}
	},
	methods: {
		handleClick(ev: MouseEvent) {
			const description = ev.target as HTMLElement;

			description.classList.add('shown');
		}
	}
}
</script>
	
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	#myprojects {
		padding: 100px;
		display: flex;
		justify-content: space-around;
		flex-direction: column;
		align-items: center;
		gap: 120px;
		background-image: url(../assets/imgs/hexagon.webp);
		background-size: 400px;
	}
	.project {
		border: 2px solid var(--main-text);
		border-radius: 8px;
		margin: calc(5vw - 50px);
		padding: 20px;
		position: relative;
		max-width: 640px;
		backdrop-filter: blur(3px);
	}
	.bg {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		opacity: 0.2;
		background-image: url(../assets/imgs/grid.webp), radial-gradient(ellipse at 80% 100%, #888F, transparent 70%);
		pointer-events: none;
		z-index: -1;
	}
	.tags {
		display: flex;
		flex-wrap: wrap;
	}
	.tag {
		color: var(--main-hot);
		background-color: var(--main-text-alpha);
		box-shadow: inset 0px 0px 4px black;
		border-radius: 20px;
		padding: 6px;
		margin: 2px;
		white-space: nowrap;
		text-align: center;
	}
	.name {
		color: var(--main-hot);
		font-size: 42px;
		font-weight: bold;
		text-align: center;
		display: block;
	}
	.content {
		color: var(--main-text);
		max-height: 130px;
		overflow: hidden;
		margin-bottom: 24px;
		position: relative;
		cursor: pointer;
	}
	.content a {
		color: var(--main-hot);
	}
	.content::before {
		position: absolute;
		content: 'Click to show more';
		bottom: 0;
		right: 0;
		background-color: #111;
		box-shadow: inset 0px 0px 20px #000;
		z-index: 1;
		margin: 4px;
		padding: 4px;
		border-radius: 12px;
		color: var(--main-hot);
	}
	.content::after {
		position: absolute;
		content: '';
		bottom: 0;
		left: 0;
		width: 100%;
		height: 30px;
		background-image: linear-gradient(0deg, #4448, transparent);
	}
	.content:hover::after {
		background-image: linear-gradient(0deg, #FFF8, transparent);
	}
	.content.shown {
		max-height: unset;
		cursor: default;
	}
	.content.shown::after, .content.shown::before {
		display: none;
	}
	.banner {
		display: block;
		width: 100%;
		border-radius: 6px;
		margin-bottom: 12px;
	}
	.description {
		font-style: italic;
		color: var(--main-hot);
		opacity: 0.6;
	}
	.description::before {
		content: '➤ ';
	}
</style>
  