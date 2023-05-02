<script lang="ts">
import { defineComponent } from 'vue'
import type { MenuLink } from '../../types'

export default defineComponent({
	name: 'ConstructMenu',
})
</script>

<script setup lang="ts">
const props = defineProps<{
	items: Array<MenuLink>
}>()
</script>

<template>
	<menu class="construct-menu">
		<ConstructMenuItem
			v-for="(item, index) in props.items"
			:key="index"
			:item="item"
		/>
	</menu>
</template>

<style lang="scss" scoped>
.construct-menu {
	@include flex(column);
	padding: 0px;
	margin: 0px;
}
</style>
