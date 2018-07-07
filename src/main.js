// const Vue = require('vue')
//Es6的导入模块
import Vue from 'vue'
import App from './App.vue'

// 导入css
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import './assets/index.css';

new Vue({
  el: '#app',
  render: h => h(App)
})
