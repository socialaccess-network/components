<script lang="ts">
import { computed, defineComponent, ref } from 'vue'

export default defineComponent({
	name: 'ConstructRadioOption',
})
</script>

<script setup lang="ts">
const props = defineProps<{
	modelValue: any
	value: any
	name: string
	id: string
	label: string
	type: 'radio' | 'checkbox'
	options?: Record<string, string | boolean>
}>()

const emit = defineEmits<{
	(event: 'update:modelValue', value: string): void
}>()

const mvalue = computed({
	get: () => props.modelValue,
	set: value => emit('update:modelValue', value),
})
</script>

<template>
	<div class="construct-radio-option">
		<ConstructButton>
			<input
				v-model="mvalue"
				v-bind="props.options"
				:id="props.id"
				:type="props.type"
				:value="props.value"
				:name="props.name"
			/>
		</ConstructButton>

		<label :for="props.id">
			{{ props.label }}
		</label>
	</div>
</template>

<style lang="scss" scoped>
.construct-radio-option {
	@include flex(row, flex-start, center);
	width: 100%;
	column-gap: 0.5em;

	border: 1px solid black;
	border-radius: $border-radius;

	.construct-button {
		border: none;

		input {
			@include flex(column, center, center);
			width: 1.25em;
			height: 1.25em;
			margin: 0.25em;
			cursor: pointer;
		}
	}
}
</style>
