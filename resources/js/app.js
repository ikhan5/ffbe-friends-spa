import Vue from "vue";
import VueRouter from "vue-router";
import VueSelect from "vue-select";
import BootstrapVue from 'bootstrap-vue'

import App from "./pages/Layout.vue";
import Header from "./components/global/Header";
import Spinner from "./components/Spinner";

import { routes } from "./routes";
import store from './store';
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(BootstrapVue)
Vue.use(VueRouter);

Vue.component("app-v-select", VueSelect);
Vue.component("app-spinner", Spinner);

const router = new VueRouter({
    mode: "history",
    routes
});

Vue.filter("friendCode", value => {
    if (!value) return "";
    value.toString();
    return value.replace(/(.)(?=(.{3})+$)/g, "$1,");
});

export const eventBus = new Vue();

const app = new Vue({
    el: "#app",
    components: {
        App,
        AppHeader: Header
    },
    router,
    store
});
