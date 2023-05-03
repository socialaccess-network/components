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

const isSelected = computed(() => {
	if (props.type === 'checkbox' && Array.isArray(mvalue.value))
		return mvalue.value.includes(props.value)
	return mvalue.value === props.value
})
</script>

<template>
	<div
		class="construct-radio-option"
		:class="{ selected: isSelected }"
	>
		<input
			v-model="mvalue"
			v-bind="props.options"
			:id="props.id"
			:type="props.type"
			:value="props.value"
			:name="props.name"
		/>

		<ConstructButton>
			<slot
				name="icon"
				:selected="isSelected"
			>
				<i class="icon" />
			</slot>
		</ConstructButton>

		<label :for="props.id">
			{{ props.label }}
		</label>
	</div>
</template>

<style lang="scss" scoped>
.construct-radio-option {
	@include flex(row, flex-start, stretch);
	width: 100%;

	border: 1px solid black;
	border-radius: $border-radius;
	position: relative;

	overflow: hidden;

	input {
		display: block;

		width: 100%;
		height: 100%;

		position: absolute;
		top: 0;
		left: 0;
		margin: 0px;

		opacity: 0;
		cursor: pointer;
	}

	.construct-button {
		border: none;
		flex-shrink: 0;
		overflow: hidden;
		cursor: pointer;

		.icon {
			width: 15px;
			height: 15px;

			background-color: gray;
			border-radius: 100%;

			transition: background-color 0.2s ease-in-out;
		}
	}

	label {
		min-width: 100px;
		padding: 0.5em;
	}
}

.construct-radio-option.selected {
	.construct-button {
		.icon {
			background-color: black;
		}
	}
}
</style>
