<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
	name: 'ConstructRequiredMark',
})
</script>

<script setup lang="ts"></script>

<template>
	<span class="construct-required-mark" />
</template>

<style lang="scss" scoped>
.construct-required-mark {
	display: inline-block;
	width: 0.75em;
	height: 0.75em;
	background-color: red;
	border-radius: 100%;
}
</style>
