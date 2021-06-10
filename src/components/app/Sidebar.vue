<template>
  <!-- <ul id="navigation" class="sidenav app-sidenav" :class="{ open: value }">
        <router-link
            v-for="item in navigation" 
            :key="item"
            tag="li"
            active-class="active"
            :to="item.url"
        >
            <a href="#" class="black-text">
                <i
                v-if="item.subnav"
            ></i>
            </a>
            <div class="title" @click="item.open = !item.open">
                {{ item.title }}
            </div>
            <Dropdown v-if="item.subnav" :list="item" />
        </router-link>
    </ul> -->
  <!--  <li>
            <a href="#" class="waves-effect waves-orange pointer"
                >Расписание
                <i class="material-icons right">arrow_drop_down</i>
            </a>
            <ul id="dropdown" class="dropdown-content">
                <li>
                    <a href="#" class="black-text">
                        <i class="material-icons">account_circle</i>Мое
                        расписание понедельно
                    </a>
                </li>
                <li>
                    <a href="#" class="black-text">
                        <i class="material-icons">assignment_return</i>Мое
                        расписание общее
                    </a>
                </li>
                <li>
                    <a href="#" class="black-text">
                        <i class="material-icons">account_circle</i>Расписание
                        другого преподователя
                    </a>
                </li>
                <li>
                    <a href="#" class="black-text">
                        <i class="material-icons">account_circle</i>Общее
                        расписание другого преподавателя
                    </a>
                </li>
                <li>
                    <a href="#" class="black-text">
                        <i class="material-icons">account_circle</i
                        >Сгенерировать отчет
                    </a>
                </li>
                <li>
                    <a href="#" class="black-text">
                        <i class="material-icons">account_circle</i>Список
                        переносов
                    </a>
                </li>
                <li>
                    <a href="#" class="black-text">
                        <i class="material-icons">account_circle</i>Добавить
                        пару
                    </a>
                </li>
            </ul>
        </li>
        <li>
            <a href="#" class="waves-effect waves-orange pointer"
                >Преподаватели</a
            >
        </li>
        <li>
            <a href="#" class="waves-effect waves-orange pointer"
                >Справочники
                <i class="material-icons right">arrow_drop_down</i>
            </a>
        </li> -->
  <ul id="navigation" class="sidenav app-sidenav" :class="{ open: value }">
    <li v-for="(item, index) in navigation" :key="'item' + index">
      <a active-class="active" @click="item.open = !item.open">
        {{ item.title }}
        <i class="material-icons right">arrow_drop_down</i>
      </a>
      <Dropdown v-if="item.subnav" :list="item" />
    </li>
  </ul>
</template>

<script>
import Dropdown from './Dropdown';

export default {
  props: ['value'],
  computed: {
    navigation() {
      return this.$store.getters.navigation;
    },
  },
  components: { Dropdown },
};
</script>
