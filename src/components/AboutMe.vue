<template>
	<div id="aboutme">
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
  
<script>
export default {
	name: 'AboutMe',
	props: {}
}
</script>
	
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	#aboutme {
		padding: 100px;
		display: flex;
		justify-content: space-between;
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
		width: 400px;
		aspect-ratio: 1/1;
		background-image: url(../assets/imgs/space.svg);
		background-repeat: repeat;
		animation: 12s space infinite linear reverse;
		border-radius: 50%;
		border: 3px solid var(--main-text);
		position: relative;
		justify-content: center;
		align-items: center;
	}
	@keyframes space {
		from {
			background-position-x: 0px;
		}
		to {
			background-position-x: 2000px;
		}
	}
	#alien {
		animation: alien 2s infinite alternate ease-in-out;
		width: 40%;
	}
	@keyframes alien {
		from {
			transform: translateY(20px) rotateZ(10deg);
		}
		to {
			transform: translateY(-20px) rotateZ(5deg);
		}
	}
</style>
  