<script lang="ts">
import { computed, defineComponent } from 'vue'

export default defineComponent({
	name: 'ConstructSelect',
})
</script>

<script setup lang="ts">
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
		<select
			v-model="value"
			v-bind="props.options"
		>
			<slot name="no-value">
				<option
					:value="undefined"
					disabled
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
		border-radius: 0.25em;

		transform: scale(1);
		transition: all 0.25s;
	}
}
</style>
