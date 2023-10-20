<template>
	<main>
		<div role="button" class="p-4 bg-sky-100 w-fit h-fit" @click="addWidgetA">Add Widget</div>
		<div class="grid-stack"></div>
	</main>
</template>

<script setup lang="ts">
import { onMounted, onUnmounted, getCurrentInstance, ref } from 'vue';
import type { ComponentInternalInstance } from 'vue';
import { GridStack } from 'gridstack';
import type { GridStackWidget } from 'gridstack';
import { renderComponent } from '@/utils/component-renderer';

let grid: GridStack | null;
const items: GridStackWidget[] = [
	{ x: 0, y: 0, w: 2, h: 2, noMove: true },
	{ x: 2, y: 3, w: 3, content: 'item 2' },
	{ x: 1, y: 3 },
];
const gridMargin = 8;

onMounted(() => {
	grid = GridStack.init({ alwaysShowResizeHandle: true, margin: `${gridMargin}px` });
	grid.load(items);
});

const { appContext } = getCurrentInstance() as ComponentInternalInstance;
let destroyComp: any = null;
let count = 1;

onUnmounted(() => destroyComp?.());

async function addWidgetA() {
	if (grid) {
		const tempWidget = grid.addWidget({ x: 1, y: 3 });
		console.log('temp widget', tempWidget);

		if (tempWidget) {
			// destroyComp?.();
			destroyComp = renderComponent({
				el: tempWidget,
				component: (await import('@/components/WidgetA.vue')).default,
				props: {
					count: count++,
					gridMargin: gridMargin,
				},
				appContext,
			});
		}
	}
}
</script>

<style scoped lang="css">
.grid-stack {
	background: #fafad2;
}

:deep(.grid-stack-item-content) {
	background-color: skyblue;
	border: 1px solid black;
}
</style>
