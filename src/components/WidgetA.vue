<template>
	<div class="relative pointer-events-none" :style="`padding: ${gridMargin}px`">
		<div class="bg-green-200">
			<div>WidgetA</div>
			<div>{{ props.count }}</div>
		</div>
	</div>
</template>

<script setup lang="ts">
const props = defineProps<{ count: number; gridMargin: number }>();
</script>
