<template>
	<main>
		<div class="bg-red-100 h-[500px]">
			<Parent></Parent>
		</div>
	</main>
</template>

<script setup lang="ts">
import Parent from '@/components/Parent.vue';
import { provide, ref } from 'vue';
import type { InjectionKey } from 'vue';

const someValue = ref('provided value');
const key = Symbol('someValueKey') as InjectionKey<string>;
provide(key, someValue.value);
</script>
