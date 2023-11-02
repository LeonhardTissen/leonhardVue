<template>
	<a class="navitem" :id="'nav' + url" :href="'#' + url" @click="handleClick">{{ name }}</a>
</template>
  
<script lang="ts">
import { goTo } from '../dom';

export default {
	name: 'NavItem',
	props: {
		name: String,
		url: String
	},
	methods: {
        handleClick(ev: MouseEvent) {
			const targetElement = ev.target as HTMLElement;

			if (targetElement === null) return;

			const targetHref = targetElement.getAttribute('href');

			if (targetHref === null) return;

			goTo(targetHref.replace('#', ''));
        }
    }
}
</script>
	
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	.navitem {
		font-size: 24px;
		cursor: pointer;
		color: var(--main-text);
		transition: color 0.2s ease-out, transform 0.1s ease-out;
		text-decoration: none;
		position: relative;
	}
	.navitem::after {
		content: '';
		position: absolute;
		background-color: var(--main-text);
		top: 100%;
		left: 0px;
		width: 0%;
		height: 4px;
		display: block;
		transition: width 0.3s ease-in-out, color 0.2s ease-out;
		border-radius: 2px;
	}
	.navitem:hover {
		color: var(--main-hot);
	}
	.navitem:hover::after {
		width: 100%;
		background-color: var(--main-hot);
	}
	.navitem.selected {
		color: var(--main-hot);
		pointer-events: none;
		transform: translateY(-4px);
	}
	@media screen and (max-width: 640px) {
		.navitem::before {
			content: '· ';
			margin-left: 20px;
		}
	}
</style>
  