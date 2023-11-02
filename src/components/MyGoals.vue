<template>
	<div id="mygoals">
		<div id="textsection">
			<h1>Unleashing creativity on the web</h1>
			<p>
				Not only do I have a passion for web development,<br>
				but also game development and fullstack development.<br>
				<br>
				Throughout my many years as a developer, I've built<br>
				and maintained high quality creations ranging from fun<br>
				to providing real value to users.<br>
				<br>
				And I want to continue doing exactly that.
			</p>
		</div>
		<div id="animcontainer">
			<img id="alien" src="../assets/imgs/alien.svg">
		</div>
	</div>
</template>
  
<script lang="ts">
export default {
	name: 'MyGoals',
}
</script>
	
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	#mygoals {
		padding: 100px 50px;
		display: flex;
		justify-content: space-around;
		align-items: center;
	}
	#textsection {
		max-width: 500px;
		display: inline-block;
	}
	h1 {
		text-align: center;
		color: var(--main-hot);
	}
	p {
		line-height: 28px;
		font-size: 18px;
	}
	#animcontainer {
		display: inline-flex;
		width: min(80vw, 400px);
		aspect-ratio: 1/1;
		background-image: url(../assets/imgs/space.svg);
		background-repeat: repeat;
		background-size: 500%;
		animation: 1000s space infinite linear reverse;
		border-radius: 50%;
		border: 3px solid var(--main-text);
		position: relative;
		justify-content: center;
		align-items: center;
	}
	@keyframes space {
		from {
			background-position-x: 0%;
		}
		to {
			background-position-x: 200000px;
		}
	}
	#alien {
		animation: alien 2s infinite alternate ease-in-out;
		width: 40%;
	}
	@keyframes alien {
		from {
			transform: translateY(20%) rotateZ(10deg);
		}
		to {
			transform: translateY(-20%) rotateZ(5deg);
		}
	}
	@media screen and (max-width: 700px) {
		#mygoals {
			flex-direction: column;
		}
	}
</style>
  