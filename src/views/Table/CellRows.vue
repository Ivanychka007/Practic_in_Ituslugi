<template>
  <td :style="thtdStyles" v-if="column.editor?.type === 'input'">
    <input
      type="text"
      :value="value"
      :maxlength="column.editor.params.maxlength"
      :pattern="column.editor.params.pattern"
      @input="column.editor.params.onInput($event, row)"
    />
  </td>
  <td
    :style="thtdStyles"
    v-html="cellState(row, column, value)"
    :class="styleState(row, column)"
    v-else
  ></td>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    column: {
      type: Object,
      required: true,
    },
    row: {
      type: Object,
      required: true,
    },
    value: {
      type: Number,
      required: true,
    },
    thtdStyles: {
      type: Object,
      default: () => ({}),
    },
  },
  methods: {
    styleState(row: any, column: any) {
      if (column.styleState) {
        return column.styleState(row);
      } else return null;
    },
    cellState(row: any, column: any, value: any) {
      if (column.cellState) {
        return column.cellState(row);
      } else return value;
    },
  },
});
</script>
