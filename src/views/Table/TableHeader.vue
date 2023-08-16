<template>
  <th v-for="column in columns" :key="column.field">
    {{ column.label }}
  </th>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    columns: {
      type: Array,
      required: true,
    },
    thtdStyles: {
      type: Object,
      default: () => ({}),
    },
  },
});
</script>
