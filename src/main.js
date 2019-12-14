import Vue from 'vue'
import App from './App.vue'
import HelloWorld from './components/HelloWorld.vue'

//importando rotas
import VueRouter from 'vue-router'
//para importar biblioteca para dentro do vue
Vue.use(VueRouter)

const router = new VueRouter({
  //criando objeto vazio
  routes: [
    {
      path: '/cadastro',
      component: HelloWorld
    }
  ]
})

Vue.config.productionTip = false

new Vue({
  //passsando rota
  router,

  render: h => h(App),
}).$mount('#app')
