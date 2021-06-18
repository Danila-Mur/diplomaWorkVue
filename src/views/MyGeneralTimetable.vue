<template>
  <div>
    <div class="page-title">
      <h3>Мое расписание общее</h3>
    </div>
    <table
      class="timetable centered"
      cellpadding="5"
      v-for="value in Object.values(timetable)"
      :key="value"
    >
      <tr>
        <td></td>
        <td>1</td>
        <td>2</td>
        <td>3</td>
        <td>4</td>
        <td>5</td>
        <td>6</td>
        <td>7</td>
      </tr>
      <tr v-for="(indexDay, item) in value" :key="item">
        <td>{{ item }}</td>
        <td
          class="cell"
          v-for="index in Object.values(indexDay)"
          :key="index.id"
        >
          <template v-if="index.week_type == 'always'">
            <div class="icons">
              <i class="small material-icons">create</i>
              <i class="small material-icons" @click="openModal">add</i>
              <i class="small material-icons">delete</i>
            </div>
            <div class="item" :class="{active: isActive}">
              <span v-for="subject in Object.values(index)" :key="subject">
                {{ subject.name }}
              </span>
              <br />
              <span
                v-for="lecturer in Object.values(index.lecturers)"
                :key="lecturer"
              >
                {{ lecturer.last_name }}
                {{ lecturer.first_name }}
                {{ lecturer.middle_name }}
              </span>
              <br />
              <span>
                {{ index.auditorium.building_number }}.{{
                  index.auditorium.auditorium_number
                }}
              </span>
              <br />
              <span>
                {{ index.lesson_type.type }}
              </span>
              <br />
              <span v-for="group in Object.values(index.groups)" :key="group">
                {{ group.specialty.abbreviation }}-{{
                  group.admission_year | sliceYear
                }}{{ group.subgroup }}
              </span>
            </div>
          </template>
          <template v-else>
            <template v-if="index.week_type == 'up'">
              <div class="icons">
                <i class="small material-icons">create</i>
                <i class="small material-icons" @click="openModal">add</i>
                <i class="small material-icons">delete</i>
              </div>
              <div class="item" :class="{active: isActive}">
                <span v-for="subject in Object.values(index)" :key="subject">
                  {{ subject.name }}
                </span>
                <br />
                <span
                  v-for="lecturer in Object.values(index.lecturers)"
                  :key="lecturer"
                >
                  {{ lecturer.last_name }}
                  {{ lecturer.first_name }}
                  {{ lecturer.middle_name }}
                </span>
                <br />
                <span>
                  {{ index.auditorium.building_number }}.{{
                    index.auditorium.auditorium_number
                  }}
                </span>
                <br />
                <span>
                  {{ index.lesson_type.type }}
                </span>
                <br />
                <span v-for="group in Object.values(index.groups)" :key="group">
                  {{ group.specialty.abbreviation }}-{{
                    group.admission_year | sliceYear
                  }}{{ group.subgroup }}
                </span>
                <hr />
              </div>
            </template>
            <template v-else-if="index.week_type == 'down'">
              <div class="icons">
                <i class="small material-icons">create</i>
                <i class="small material-icons" @click="openModal">add</i>
                <i class="small material-icons">delete</i>
              </div>
              <div class="item" :class="{active: isActive}">
                <hr />
                <span v-for="subject in Object.values(index)" :key="subject">
                  {{ subject.name }}
                </span>
                <br />
                <span
                  v-for="lecturer in Object.values(index.lecturers)"
                  :key="lecturer"
                >
                  {{ lecturer.last_name }}
                  {{ lecturer.first_name }}
                  {{ lecturer.middle_name }}
                </span>
                <br />
                <span>
                  {{ index.auditorium.building_number }}.{{
                    index.auditorium.auditorium_number
                  }}
                </span>
                <br />
                <span>
                  {{ index.lesson_type.type }}
                </span>
                <br />
                <span v-for="group in Object.values(index.groups)" :key="group">
                  {{ group.specialty.abbreviation }}-{{
                    group.admission_year | sliceYear
                  }}{{ group.subgroup }}
                </span>
              </div>
            </template>
            <template v-else>
              <div class="icons">
                <i class="small material-icons">create</i>
                <i class="small material-icons" @click="openModal">add</i>
                <i class="small material-icons">delete</i>
              </div>
              <div class="item" :class="{active: isActive}"></div>
            </template>
          </template>
        </td>
      </tr>
    </table>

    <timetable-form :isModalOpen="iconHidden" />
  </div>
</template>

<script>
import TimetableForm from '@/components/app/TimetableForm';
import {actionTypes} from '@/store/modules/timetable';
import {mapActions, mapState} from 'vuex';
import M from 'materialize-css';
import 'vue-select/dist/vue-select.css';
export default {
  components: {
    TimetableForm
  },
  data: () => ({
    isActive: false,
    iconVisibillity: false,
    iconHidden: false,
    modalClass: '.modal',
    instance: null,
    days: {}
  }),
  computed: {
    ...mapState({
      isLoading: state => state.timetable.isLoading,
      error: state => state.timetable.error,
      timetable: state => state.timetable
    })
  },
  filters: {
    sliceYear(value) {
      return value.toString().substring(2);
    }
  },
  beforeMount() {
    console.log('d', this.timetable);

    this[[actionTypes.getTimetable]]();
  },
  mounted() {
    this.initModal();
  },
  methods: {
    initModal: function() {
      M.Modal.init(this.$refs.modal, {
        opacity: 0.7
      });
      this.instance = M.Modal.getInstance(this.$refs.modal);
    },
    openModal: function() {
      this.iconHidden = !this.iconHidden;
    },
    ...mapActions([actionTypes.getTimetable])
  }
};
</script>
