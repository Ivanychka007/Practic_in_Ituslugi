<template>
  <div>
    <h2>Форма ввода номера лицевого счета</h2>
    <input v-model="accountNumber" type="text" :maxlength="25" />
    <button @click="searchAccount">Найти</button>
  </div>
</template>

<script>
import { defineComponent } from 'vue';
import { useStore } from 'vuex';

export default defineComponent({
  data() {
    return {
      accountNumber: '',
      accountNotFound: false,
      accountFound: false,
    };
  },
  methods: {
    searchAccount() {
      this.$store.dispatch('findAccount', this.accountNumber)
        .then((account) => {
          if (account) {
            this.$router.push('/meter-reading');
          } else {
            alert('ЛС не найден');
          }
        })
        .catch((error) => {
          alert('Ошибка при поиске ЛС:', error);
        });
    },
 
  },
});
</script>