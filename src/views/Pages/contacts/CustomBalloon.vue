<template>
  <div>
    {{ modelValue }} component with props and emits
    <button @click="$emit('update:modelValue', 'Awesome')">Click!</button>
  </div>
</template>

<script setup>
import { defineProps, defineEmits } from 'vue';
defineProps({
  modelValue: {
    type: String,
    default: '',
  },
});

defineEmits(['update:modelValue']);
</script>