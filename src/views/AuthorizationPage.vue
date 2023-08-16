<template>
  <div class="autorizationstyle">
    <h2>Авторизация</h2>
    <input type="text" v-model="username" placeholder="Логин" />
    <input type="password" v-model="password" placeholder="Пароль" />
    <button @click="login">Войти</button>
    <button @click="goToForm">Передача показаний без регистрации</button>
  </div>
  <div v-if="showMessage" class="over" @click="closeOver">
    <div class="window">
      <p>Неверый логин или пароль.</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: "",
      password: "",
      showMessage: false,
    };
  },
  methods: {
    login() {
      if (this.username === "admin" && this.password === "password") {
        this.$router.push("/pages-reading");
      } else {
        this.showMessage = true
      }
    },
    goToForm() {
      this.$router.push("/seach-reading");
    },
    closeOver() {
      this.showMessage = false;
    },
  },
};
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
.window {
  background-color: white;
  padding: 20px;
  border-radius: 8px;
  text-align: center;
}
.autorizationstyle{
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    align-content : center;
    
}
div input {
    margin: 8px;
}
div button {
    margin: 8px;
}
</style>
