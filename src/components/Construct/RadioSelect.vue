<script lang="ts">
import { computed, defineComponent, useSlots } from 'vue'

export default defineComponent({
	name: 'ConstructRadioSelect',
})
</script>

<script setup lang="ts">
const slots = useSlots()
const props = defineProps<{
	modelValue: any
	id: string
	label?: string
	values: Array<{
		id: string
		value: any
		label: string
		disabled?: boolean
		selected?: boolean
	}>
	options?: Record<string, string | boolean>
}>()

const emit = defineEmits<{
	(event: 'update:modelValue', value: string): void
}>()

const value = computed({
	get: () => props.modelValue,
	set: value => emit('update:modelValue', value),
})

const type = computed(() => {
	if (props.options?.multiple) return 'checkbox'
	return 'radio'
})
</script>

<template>
	<ConstructInputBox
		v-bind="props"
		class="construct-radio-select"
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

		<ConstructRadioOption
			v-for="option in props.values"
			v-model="value"
			v-bind="option"
			:name="props.id"
			:type="type"
		>
			<template
				v-if="slots.icon"
				#icon="iconProps"
			>
				<component
					:is="slots.icon"
					v-bind="iconProps"
				/>
			</template>
		</ConstructRadioOption>
	</ConstructInputBox>
</template>

<style lang="scss" scoped>
.construct-radio-select {
	:deep(.input-area) {
		@include flex(column);
		row-gap: 0.5em;
	}
}
</style>
