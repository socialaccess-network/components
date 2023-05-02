<script lang="ts">
import { defineComponent } from 'vue'
import type { MenuLink } from '../../types'

export default defineComponent({
	name: 'ConstructMenuItem',
})
</script>

<script setup lang="ts">
const props = defineProps<{
	item: MenuLink
}>()
</script>

<template>
	<div class="construct-menu-item">
		<ConstructLink
			:to="props.item.to"
			:options="props.item.options"
		>
			{{ props.item.label }}
		</ConstructLink>

		<ConstructMenu
			v-if="props.item.children"
			:items="props.item.children"
		/>
	</div>
</template>

<style lang="scss" scoped>
.construct-menu-item {
	.construct-link {
		display: block;
		padding: 0.5em;
	}

	& > .construct-menu {
		padding-left: 1em;
		border-left: 1px solid black;
	}
}
</style>
