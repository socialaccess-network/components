<script lang="ts">
import { isString } from '@michealpearce/utils'
import { computed, defineComponent } from 'vue'
import type { RouteLocationRaw } from 'vue-router'

export default defineComponent({
	name: 'ConstructLink',
})
</script>

<script setup lang="ts">
const props = defineProps<{
	to: string | RouteLocationRaw
	options?: Record<string, any>
}>()

const isInternal = computed(() =>
	isString(props.to) ? props.to.startsWith('/') : true,
)
const tagName = computed(() => (isInternal.value ? 'RouterLink' : 'a'))
const attrName = computed(() => (isInternal.value ? 'to' : 'href'))
</script>

<template>
	<component
		:is="tagName"
		v-bind="props.options"
		:[attrName]="props.to"
		class="construct-link"
	>
		<slot />
	</component>
</template>

<style lang="scss" scoped>
.construct-link {
}
</style>
