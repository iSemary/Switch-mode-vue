require("./bootstrap");
window.Vue = require("vue").default;


// Require Components
Vue.component("header-look", require("./components/HeaderLook.vue").default);

const app = new Vue({
    el: "#app"
});