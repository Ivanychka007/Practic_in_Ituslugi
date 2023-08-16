<template>
  <div>
    <h2>Новости</h2>
    <div v-for="newsItem in paginatedNews" :key="newsItem.id">
      <NewsComponent :newsItem="newsItem" />
    </div>
    <PaginationComponent
      :currentPage="currentPage"
      :quantityPages="quantityPages"
      :sizePage = "sizePage"
      @page-changed="changePage"
      @items-per-page-changed = "changeItemsPage"
    />
    
  </div>
</template>

<script>
import axios from "axios";
import PaginationComponent from "./PaginationComponent.vue";
import NewsComponent from "./NewsComponent.vue";

export default {
  components: {
    PaginationComponent,
    NewsComponent,
  },
  data() {
    return {
      news: [],
      sizePage: 0,
      currentPage: 1,
      newsList: [],
    };
  },
  created() {
    this.fetchNewsData();
  },
  computed: {
    quantityNews() {
      return this.news.length;
    },
    quantityPages() {
      return Math.ceil(this.quantityNews / this.sizePage);
    },
    paginatedNews() {
      const startIndex = (this.currentPage-1) * this.sizePage;
      const endIndex = startIndex + this.sizePage;
      return this.news.slice(startIndex, endIndex);
    },
  },
  methods: {
    changePage(page) {
      this.currentPage = page;
    },
    changeItemsPage(newssizePage) {
      this.sizePage = newssizePage;
    },
    async fetchNewsData() {
      const apiUrl =
        "https://newsapi.org/v2/top-headlines?" +
        "country=us&" + "pageSize=100&"+
        "apiKey=fcc9c8d9e1ae45efaa78e7ff0f170d4f";

      try {
        const response = await axios.get(apiUrl);
        this.news = response.data.articles;
      } catch (error) {
        console.error(error);
      }
    },
  },
};
</script>
