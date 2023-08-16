import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import AuthorizationPage from "../views/AuthorizationPage.vue";
import MainPages from "../views/MainPages.vue";
import SearchForm from '../views/SearchForm.vue'
import AccountForm from "../views/AccountForm.vue";
import ContactsPage from "../views/Pages/contacts/ContactsPage.vue";
import RequestPage from "../views/Pages/requests/RequestPage.vue";
import NewsPage from "../views/Pages/news/NewsPage.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "home",
    component: AuthorizationPage,
  },
  {
    path: "/pages-reading",
    name: "pages-reading",
    component: MainPages,
  },
  {
    path: "/seach-reading",
    name: "seach-reading",
    component: SearchForm,
  },
  {
    path: "/meter-reading",
    name: "meter-reading",
    component: AccountForm,
  },
  {
    path: "/contacts-reading",
    name: "/contacts-reading",
    component: ContactsPage,
  },
  {
    path: "/requests-reading",
    name: "requests-reading",
    component: RequestPage,
  },
  {
    path: "/news-reading",
    name: "news-reading",
    component: NewsPage,
  },
];

const router = createRouter({
history: createWebHistory(process.env.BASE_URL),
routes
})

export default router