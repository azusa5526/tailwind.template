<template>
	<div class="bg-sky-200">
		<div>child</div>
		<div>child props {{ initCount }}{{ showText }}</div>
		<div>privateCount: {{ privateCount }}</div>
		<div>exposedCount: {{ exposedCount }}</div>
		<div class="bg-sky-300" @click="$emit('resetInitCount', 0)">emit updateInitCount</div>
	</div>
</template>

<script setup lang="ts">
import { ref, inject } from 'vue';

interface ComplexStation {
	name: string;
	value?: number;
}

const props = defineProps<{ initCount?: number; showText?: string; station?: ComplexStation }>();

const exposedCount = ref(props.initCount || 0);
const privateCount = ref(0);

function toggleExposeCount() {
	exposedCount.value += 1;
}

defineExpose({ exposedCount, toggleExposeCount });

// const emit = defineEmits<{ (e: 'resetInitCount', initCount: number): void }>();
const emit = defineEmits<{ resetInitCount: [initCount: number] }>();

const injectedSomeValue = inject<string>('someValueKey', 'default');
</script>
