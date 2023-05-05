<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
	name: 'ConstructButton',
})
</script>

<script setup lang="ts">
const props = withDefaults(
	defineProps<{
		type?: 'button' | 'submit' | 'reset'
	}>(),
	{
		type: 'button',
	},
)
</script>

<template>
	<button
		:type="props.type"
		class="construct-button"
	>
		<slot />
	</button>
</template>

<style lang="scss" scoped>
.construct-button {
	@include flex(row, center, center);
	padding: 0.5em 1em;

	border: 1px solid black;
	border-radius: $border-radius;

	font-size: 0.8em;
	font-weight: bold;

	cursor: pointer;
}
</style>
