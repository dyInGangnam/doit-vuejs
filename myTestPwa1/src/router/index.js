import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Hello2 from '@/components/Hello2'
import Hello3 from '@/components/Hello3'
import Hello4 from '@/components/Hello4'
import Hello5 from '@/components/Hello5'

Vue.use(Router)

function dynamicPropsFn (route) {
  const now = new Date()
  return {
    name: (now.getFullYear() + parseInt(route.params.years)) + '!'
  }
}

const Home = { template: '<div>home</div>' }

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/hello2',
      name: 'Hello2',
      component: Hello2
    },
    { path: '/hello/:name', component: Hello2, props: true }, // Pass route.params to props
    { path: '/static', component: Hello2, props: { name: 'world' }}, // static values
    { path: '/dynamic/:years', component: Hello2, props: dynamicPropsFn }, // custom logic for mapping between route and props
    { path: '/attrs', component: Hello2, props: { name: 'attrs' }},
    { path: '/home', component: Home},
    {
      path: '/hello3',
      name: 'Hello3',
      component: Hello3
    },
    {
      path: '/hello4',
      name: 'Hello4',
      component: Hello4
    },
    {
      path: '/hello5',
      name: 'Hello5',
      component: Hello5
    },
  ]
})
