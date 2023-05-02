<script lang="ts">
import { computed, defineComponent } from 'vue'

export default defineComponent({
	name: 'ConstructTitle',
})
</script>

<script setup lang="ts">
const props = withDefaults(
	defineProps<{
		level?: 1 | 2 | 3 | 4 | 5 | 6
	}>(),
	{
		level: 1,
	},
)

const headerTag = computed(() => `h${props.level}`)
</script>

<template>
	<component
		:is="headerTag"
		class="construct-title"
	>
		<slot />
	</component>
</template>

<style lang="scss" scoped>
.construct-title {
	margin: 0px;
	padding: 0.5em;
}
</style>
