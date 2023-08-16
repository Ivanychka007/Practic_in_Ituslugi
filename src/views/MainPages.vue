<template>
  <div id="app">
    <HeaderSection />
    <SidebarSection />
    <FooterSection />
  </div>
</template>

<script lang="ts">
import HeaderSection from './Pages/main/HeaderSection.vue';
import SidebarSection from './Pages/main/SidebarSection.vue';
import FooterSection from './Pages/main/FooterSection.vue';

export default {
  components: {
    HeaderSection,
    SidebarSection,
    FooterSection
  }
};
</script>

