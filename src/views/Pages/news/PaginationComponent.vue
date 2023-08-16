<template>
  <div>
    <button @click="prevPage" :disabled="currentPage === 1">Предыдущая</button>
    <span>{{ currentPage }}</span>
    <button @click="nextPage" :disabled="currentPage === quantityPages">
      Следующая
    </button>
    <select @change="changeItemsPage($event)">
      <option v-for="option in options"  :value="option" :key="option" >
        {{ option }}
      </option>
    </select>
  </div>
</template>

<script>
export default {
  props: {
    currentPage: {
      type: Number,
      required: true,
    },
    quantityPages: {
      type: Number,
      required: true,
    },
    sizePage: {
      type: Number,
      required: true,
    },
  },
  data() {
    return {
      options: [10, 20, 30,40,50,60,70,80,90,100],
    };
  },
  methods: {
    prevPage() {
      this.$emit("page-changed", this.currentPage - 1);
    },
    nextPage() {
      this.$emit("page-changed", this.currentPage + 1);
    },
    changeItemsPage(event) {
        const newsize = parseInt(event.target.value)
        this.$emit("items-per-page-changed",   newsize );
    },
  },
};
</script>
