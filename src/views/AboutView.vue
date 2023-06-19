<template>
	<div class="about">
		<div class="owen text-4xl text-yellow-200">This is an about page</div>
	</div>
</template>

<style>
@media (min-width: 1024px) {
	.about {
		min-height: 100vh;
		display: flex;
		align-items: center;
	}
}
</style>

<style lang="scss" scoped>
$color: #fcba03;
.about {
	background-color: $color;
	margin: 50px;

  .owen {
    background-color: green;
  }
}
</style>
