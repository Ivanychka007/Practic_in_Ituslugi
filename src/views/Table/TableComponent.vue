<!-- Я должен передавать с переиспользуемым компонентами , то есть туда передается стили ,
     их значение , чтобы потом всё отрисовывалось  -->
<!-- разбить таблицу на доп.компоненты, обработка данных должна происходить в аккаунте. Передаваемые
     данные не должны зависеть от вёрстки -->
<template>
  <table :style="tableStyles">
    <thead>
      <tr>
        <TableHeader
          v-if="columns"
          :columns="columns"
          :thtdStyles="thtdStyles"
        />
      </tr>
    </thead>
    <tbody>
      <TableRows
        v-if="rows"
        :rows="rows"
        :columns="columns"
        :thtdStyles="thtdStyles"
      />
    </tbody>
  </table>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import TableHeader from "./TableHeader.vue";
import TableRows from "./TableRows.vue";

export default defineComponent({
  components: {
    TableHeader,
    TableRows,
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
    tableStyles: {
      type: Object,
      default: () => ({}),
    },
    thtdStyles: {
      type: Object,
      default: () => ({}),
    },
  },
});
</script>
