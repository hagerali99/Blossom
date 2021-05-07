import Vue from "vue";
import Vuex from "vuex";
import popupsState from "./modules/popupsState.js";
import authorization from "./modules/authorization.js";
import whyChooseUs from "./modules/whyChooseUs.js";
import products from "./modules/products.js";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    popupsState,
    authorization,
    whyChooseUs,
    products
  },
});
