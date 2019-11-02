require('es6-promise').polyfill();

import Vue from 'vue';
import Vuex from 'vuex';

import { units } from "./modules/units";

Vue.use(Vuex);

export default new Vuex.Store({
    modules:{
        units
    }
})