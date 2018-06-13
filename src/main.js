import Vue from "vue";

import App from './App';

new Vue({
    render: h => h(App)
}).$mount("#app");

// new Vue({
//     render: function(createElement) {
//         return createElement(App);
//     }
// });

