<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
	name: 'ConstructButton',
})
</script>

<script setup lang="ts"></script>

<template>
	<button class="construct-button">
		<slot />
	</button>
</template>

<style lang="scss" scoped>
.construct-button {
	@include flex(row, center, center);
	padding: 0.5em 1em;

	border: 1px solid black;
	border-radius: 0.25em;

	font-size: 0.8em;
	font-weight: bold;

	cursor: pointer;
}
</style>
