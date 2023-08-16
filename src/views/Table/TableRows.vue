<!-- Разбить tablerows на ячейки компонентов . Чтобы в форматер передавался html-элемент ячейки чтобы мог повесить 
     любое событие от покраски в красныы до клика -->

<template>
  <tr v-for="row in rows" :key="row.id">
     <CellRows 
        v-for="column in columns" 
        :key="column.field"
        :column="column"
        :row = "row"
        :value="cellValue(row, column)"
        :thtdStyles="thtdStyles"
    />
  </tr>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import CellRows from "./CellRows.vue";

export default defineComponent({
   components: {
    CellRows,
  },
  props: {
    columns: {
      type: Array,
      required: true,
    },
    rows: {
      type: Array,
      required: true,
    },
    thtdStyles: {
      type: Object,
      default: () => ({}),
    },
  },
  methods: {
    cellValue(row: any, column: any) {
      if (column.formatter) {
        return column.formatter(row);
      } else return row[column.field];
    },
  },
});
</script>
