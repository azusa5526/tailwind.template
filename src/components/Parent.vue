<template>
	<div class="bg-green-200">
		<div>parent</div>
		<Child
			ref="child"
			:init-count="initCount"
			show-text="parent give show text"
			@reset-init-count="initCount = 0"
		></Child>

		<button class="bg-green-300" @click="parentChangeExpose">Parent change expose</button>
		<button class="bg-green-300" @click="callChildToggle">Parent change expose</button>
	</div>
</template>

<script setup lang="ts">
import Child from './Child.vue';
import { ref } from 'vue';

const child = ref<InstanceType<typeof Child> | null>(null);
const initCount = ref(5);

window.addEventListener('keydown', (event: KeyboardEvent) => {
	if (event.key === 'd') {
		console.log('child');
		if (child.value) {
			console.log(child.value.exposedCount);
		}
	}
});

function parentChangeExpose() {
	if (child.value) {
		child.value.exposedCount += 1;
	}
}

function callChildToggle() {
	if (child.value) {
		child.value.toggleExposeCount();
	}
}
</script>
