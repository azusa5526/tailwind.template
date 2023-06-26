<template>
	<div class="w-[800px] h-[500px] bg-red-200">
		<swiper-container
			class="h-full"
			:slides-per-view="3"
			:space-between="spaceBetween"
			:centered-slides="true"
			:pagination="{
				hideOnClick: true,
			}"
			:breakpoints="{
				768: {
					slidesPerView: 3,
				},
			}"
			@progress="onProgress"
			@slidechange="onSlideChange"
		>
			<swiper-slide class="bg-green-100">Slide 1</swiper-slide>
			<swiper-slide class="bg-green-200">Slide 2</swiper-slide>
			<swiper-slide class="bg-green-300">Slide 3</swiper-slide>
		</swiper-container>

		<div ref="target">123456789</div>
	</div>
</template>

<script setup>
import { register } from 'swiper/element/bundle';
import { useMouseInElement, useEventListener } from '@vueuse/core';
import { ref, onMounted } from 'vue';
register();

const spaceBetween = 10;
const onProgress = (e) => {
	const [swiper, progress] = e.detail;
	console.log(progress);
};

const onSlideChange = (e) => {
	console.log('slide changed');
};

const target = ref(null);
const { isOutside } = useMouseInElement(target);

onMounted(() => {
	useEventListener(document, 'click', () => {
		console.log('clicked');
	});
});
</script>
