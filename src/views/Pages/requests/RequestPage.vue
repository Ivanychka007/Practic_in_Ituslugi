<template>
  <div>
    <h1>заявки</h1>
  </div>
  <div>
    <TableComponent
      v-if="paginatedNews"
      :columns="tableColumns"
      :rows="paginatedNews"
      :tableStyles="tableStyles"
      :thtdStyles="thtdStyles"
    />
    <PaginationComponent
      :currentPage="currentPage"
      :quantityPages="quantityPages"
      :sizePage="sizePage"
      @page-changed="changePage"
      @items-per-page-changed="changeItemsPage"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import axios from "axios";
import useStore from "@/store/store";
import TableComponent from "../../Table/TableComponent.vue";
import PaginationComponent from "../news/PaginationComponent.vue";

export default defineComponent({
  components: {
    TableComponent,
    PaginationComponent,
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
  },
  data() {
    return {
      sizePage: 0,
      currentPage: 1,
      tableColumns: [
        { field: "type", label: "Номер заявки" },
        { field: "number", label: "Дата заявки" },
        { field: "lastReading", label: "Тип заявки" },
        { field: "lastReadingDate", label: "Статус заявки" },
        { field: "currentReading", label: "Дата статуса" },
        // {
        //   field: "delete",
        //   label: "",
        //   formatter: (rowData: any) => {
        //     return `<button @click="this.deleteRow('${JSON.stringify(
        //       rowData
        //     )})">Удалить</button>`;
        //   },
        // },
      ],

      tableStyles: {
        width: "100%",
        borderCollapse: "collapse",
      },
      thtdStyles: {
        border: "1px solid black",
        padding: "8px",
      },
    };
  },
  computed: {
    quantityNews() {
      return this.state.meters.length;
    },
    quantityPages() {
      return Math.ceil(this.quantityNews / this.sizePage);
    },
    paginatedNews() {
      const startIndex = (this.currentPage - 1) * this.sizePage;
      const endIndex = startIndex + this.sizePage;
      return this.state.meters.slice(startIndex, endIndex);
    },
    state() {
      const store = useStore;
      return store.getters.getState;
    },
    meters() {
      const store = useStore;
      return store.getters.getMeters;
    },
  },
  created() {
    this.tableData();
  },
  methods: {
    changePage(page: number) {
      this.currentPage = page;
    },
    changeItemsPage(newssizePage: number) {
      this.sizePage = newssizePage;
    },
    async tableData() {
      const fileUrl = "http://localhost:8080/file2.json";
      try {
        const response = await axios.get(fileUrl);
        this.state.meters = response.data.meters;
      } catch (error) {
        console.error(error);
      }
    },
    // async deleteRow(rowData: any) {
    //   const fileUrl = "http://localhost:8080/file2.json";
    //   try {
    //     console.log(rowData)
    //     await axios.delete(`${fileUrl}/${rowData.id}`);
    //     await this.tableData();
    //   } catch (error) {
    //     console.error(error);
    //   }
    // },
  },
});
</script>

<style>
.over {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
}
.red {
  color: red;
}
.window {
  background-color: white;
  padding: 20px;
  border-radius: 8px;
  text-align: center;
}
</style>
