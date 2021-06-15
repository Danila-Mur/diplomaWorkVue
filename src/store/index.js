import Vue from 'vue';
import Vuex from 'vuex';

import timetable from '@/store/modules/timetable';
import createTimetable from '@/store/modules/createTimetable';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    navigation: [
      {
        title: 'Расписание',
        open: false,
        exact: true,
        subnav: [
          {
            title: 'Мое расписание понедельно',
            open: false,
            url: '/mytimetable',
            exact: true,
          },
          {
            title: 'Мое расписание общее',
            open: false,
            url: '/mygeneraltimetable',
          },
          {
            title: 'Расписание другого преподователя',
            open: false,
            url: '/login',
          },
          {
            title: 'Общее расписание другого преподователя',
            open: false,
            url: '/login',
          },
          {
            title: 'Сгенерировать отчет',
            open: false,
            url: '/generatereport',
          },
          { title: 'Список переносов', open: false, url: '/login' },
        ],
      },
      {
        title: 'Преподаватели',
        open: false,
        subnav: [
          {
            title: 'Список преподавателей',
            open: false,
            url: '/teachers',
          },
        ],
      },
      {
        title: 'Справочники',
        open: false,
        url: '/login',
        subnav: [
          { title: 'Аудитории', open: false, url: '/audience' },
          { title: 'Факультеты', open: false, url: '/login' },
          { title: 'Должности', open: false, url: '/login' },
          { title: 'Тип оплаты', open: false, url: '/login' },
          { title: 'Тип обучения', open: false, url: '/login' },
          { title: 'Тип занятий', open: false, url: '/login' },
          { title: 'Праздники', open: false, url: '/login' },
          { title: 'Кафедры', open: false, url: '/login' },
          { title: 'Специальности', open: false, url: '/login' },
          { title: 'Группы студентов', open: false, url: '/login' },
          {
            title: 'Список изучаемых предметов',
            open: false,
            url: '/login',
          },
        ],
      },
    ],
  },
  getters: {
    navigation: (state) => {
      return state.navigation;
    },
  },
  mutations: {},
  actions: {},
  modules: {
    timetable,
    createTimetable,
  },
});
