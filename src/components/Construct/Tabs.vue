<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
	name: 'ConstructTabs',
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
	<div class="construct-tabs">
		<ConstructPillBox
			:items="props.items"
			@select="select"
		/>

		<slot
			v-if="current"
			:name="current.name"
			:item="current"
		/>
	</div>
</template>

<style lang="scss" scoped>
.construct-tabs {
	border: 1px solid black;
	border-radius: $border-radius;

	overflow: hidden;

	.construct-pill-box {
		border-bottom-right-radius: 0px;
		border-bottom-left-radius: 0px;

		:deep(.pill) {
			flex: 1;
		}
	}
}
</style>
