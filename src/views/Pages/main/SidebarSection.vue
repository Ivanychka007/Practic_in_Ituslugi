<template>
  <main>
    <div class="leftpos">
      <div class="sidebar">
        <aside>
          <router-link to="/pages-reading">Главная</router-link>
          <router-link to="/requests-reading">Заявки</router-link>
          <router-link to="/contacts-reading">Контакты</router-link>
          <router-link to="/news-reading">Новости</router-link>
        </aside>
      </div>
    </div>
  </main>
</template>

<style>
*{
  margin: 0;
  padding: 0;
}
main{
  height: 80%;
  position: fixed;
  width: 20%;
}
a{
  text-decoration: none;
  color :black;
}
.leftpos{
 height: 100%;
 
}
.sidebar{
  border:  1px solid black;
  height: 87%;
  display: flex;
  
  justify-content: center;
}
aside{
  display: flex;
  flex-direction: column;
  padding-top: 10%;
}
</style>