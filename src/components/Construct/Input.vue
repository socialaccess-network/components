<script lang="ts">
import { computed, defineComponent, useSlots } from 'vue'

export default defineComponent({
	name: 'ConstructInput',
})
</script>

<script setup lang="ts">
const slots = useSlots()
const props = defineProps<{
	modelValue: any
	id: string
	label?: string
	options?: Record<string, string | boolean>
}>()

const emit = defineEmits<{
	(event: 'update:modelValue', value: string): void
}>()

const value = computed({
	get: () => props.modelValue,
	set: value => emit('update:modelValue', value),
})
</script>

<template>
	<ConstructInputBox
		v-bind="props"
		class="construct-input"
	>
		<template
			v-if="slots.label"
			#label="labelProps"
		>
			<component
				:is="slots.label"
				v-bind="labelProps"
			/>
		</template>

		<input
			v-model="value"
			:id="props.id"
			v-bind="props.options"
		/>
	</ConstructInputBox>
</template>

<style lang="scss" scoped>
.construct-input {
	input {
		width: 100%;
		padding: 0.5em;
		border: 1px solid black;
		border-radius: $border-radius;
	}
}
</style>
