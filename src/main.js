import {printText} from './util/comp';

printText();
const env = require('env');
import './vue/scene/home/comp'
import App from './vue/App.vue';
import Vue from 'vue';

// 开启谷歌浏览器Vue.js devtools
Vue.config.devtools = true

new Vue({
    el: '#app',
    render: h => h(App)
})

console.log(env);

console.log('哈哈哈');