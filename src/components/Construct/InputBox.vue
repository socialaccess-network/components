<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
	name: 'ConstructInputBox',
})
</script>

<script setup lang="ts">
const props = defineProps<{
	id: string
	label?: string
	options?: Record<string, string | boolean>
}>()
</script>

<template>
	<fieldset class="construct-input-box">
		<slot
			v-if="props.label"
			name="label"
			:id="props.id"
			:label="props.label"
			:options="props.options"
		>
			<label
				class="input-label"
				:for="props.id"
			>
				<ConstructRequiredMark v-if="props.options?.required" />
				{{ props.label }}
			</label>
		</slot>

		<div class="input-area">
			<slot />
		</div>
	</fieldset>
</template>

<style lang="scss" scoped>
$input-color: var(--construct-input-color, black);
$input-background: var(--construct-input-background, white);
$input-border-color: var(--construct-input-border-color, black);

.construct-input-box {
	@include flex(column);
	row-gap: 0.5em;
	border: none;
	margin: 0px;
	padding: 0.75em;

	color: $input-color;
	background-color: $input-background;
	border: 1px solid $input-border-color;
	border-radius: $border-radius;

	.input-label,
	.input-area {
		width: 100%;
	}

	.input-label {
		@include flex(row, flex-start, center);
		column-gap: 0.25em;
	}
}
</style>
