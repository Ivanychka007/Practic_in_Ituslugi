<template>
  <div>
    <h3>{{ newsItem.title }}</h3>
     <h4>{{ newsItem.author }}</h4>
    <p>{{ newsItem.content }}</p>
   
  </div>
</template>

<script>
export default {
  props: {
    newsItem: {
      type: Object,
      required: true
    }
  }
};
</script>