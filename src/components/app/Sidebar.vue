<template>
  <ul id="navigation" class="sidenav app-sidenav" :class="{open: value}">
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
    }
  },
  components: {Dropdown}
};
</script>
