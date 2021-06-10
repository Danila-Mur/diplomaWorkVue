import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

export default new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      meta: { layout: 'main' },
      component: () => import('../views/Home.vue'),
    },
    {
      path: '/login',
      name: 'login',
      meta: { layout: 'empty' },
      component: () => import('../views/Login.vue'),
    },
    {
      path: '/mytimetable',
      name: 'mytimetable',
      meta: { layout: 'main' },
      component: () => import('../views/MyTimetable.vue'),
    },
    {
      path: '/mygeneraltimetable',
      name: 'mygeneraltimetable',
      meta: { layout: 'main' },
      component: () => import('../views/MyGeneralTimetable.vue'),
    },
    {
      path: '/generatereport',
      name: 'generatereport ',
      meta: { layout: 'main' },
      component: () => import('../views/GenerateReport.vue'),
    },
    {
      path: '/teachers',
      name: 'teachers',
      meta: { layout: 'main' },
      component: () => import('../views/Teachers.vue'),
    },
    {
      path: '/audience',
      name: 'audience',
      meta: { layout: 'main' },
      component: () => import('../views/Audience.vue'),
    },
  ],
});
