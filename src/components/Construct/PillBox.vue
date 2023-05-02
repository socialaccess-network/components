<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
	name: 'ConstructPillBox',
})
</script>

<script setup lang="ts">
interface Item extends Record<string, any> {
	name: string
	label: string
}

const props = defineProps<{
	items: Array<Item>
}>()

const emit = defineEmits<{
	(event: 'select', item: Item): void
}>()

const current = ref<Item>(props.items[0])

function select(item: Item) {
	current.value = item
	emit('select', item)
}
</script>

<template>
	<div class="construct-pill-box">
		<ConstructButton
			v-for="item of props.items"
			:key="item.name"
			class="pill"
			:class="{
				active: current.name === item.name,
			}"
			@click="select(item)"
		>
			{{ item.label }}
		</ConstructButton>
	</div>
</template>

<style lang="scss" scoped>
.construct-pill-box {
	@include flex(row, space-between, center);
	column-gap: 0.5em;

	color: white;
	background-color: lightgray;
	border-radius: $border-radius;
	overflow: hidden;

	.pill {
		border: none;
		border-radius: $border-radius;

		transition: background-color 0.25s;

		&:not(.active) {
			background-color: transparent;
		}
	}
}
</style>
