<script lang="ts">
import { computed, defineComponent, useSlots } from 'vue'

export default defineComponent({
	name: 'ConstructSelect',
})
</script>

<script setup lang="ts">
const slots = useSlots()
const props = defineProps<{
	modelValue: any
	id: string
	label?: string
	values: Array<{
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
</script>

<template>
	<ConstructInputBox
		v-bind="props"
		class="construct-select"
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

		<select
			v-model="value"
			v-bind="props.options"
		>
			<slot name="no-value">
				<option
					v-if="!props.options?.multiple"
					:value="undefined"
					:disabled="props.options?.required ? true : false"
					selected
				>
					--- select an option ---
				</option>
			</slot>

			<option
				v-for="(opt, index) of props.values"
				:key="index"
				:value="opt.value"
				:selected="opt.selected"
				:disabled="opt.disabled"
			>
				{{ opt.label }}
			</option>
		</select>
	</ConstructInputBox>
</template>

<style lang="scss" scoped>
.construct-select {
	select {
		width: 100%;
		padding: 0.5em;
		border: 1px solid black;
		border-radius: $border-radius;
	}
}
</style>
