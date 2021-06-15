<template>
  <div>
    <div class="page-title">
      <h3>Мое расписание общее</h3>
    </div>
    <table class="timetable centered" cellpadding="5">
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
      <tr v-for="(index, item) in Object.values(timetable.data)" :key="item">
        <td></td>
        <td
          class="cell"
          v-for="(index, key) in Object.values(index)"
          :key="key"
        >
          <template>
            <div class="icons">
              <i class="small material-icons">create</i>
              <i class="small material-icons" @click="openModal">add</i>
              <i class="small material-icons" @click="deleteTimetable"
                >delete</i
              >
            </div>
            <div class="item" :class="{active: isActive}">
              <span>
                {{ index.subject.name }}
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
              <span>{{ index.lesson_type.type }}</span>
              <br />
              <span v-for="group in Object.values(index.groups)" :key="group">
                {{ group.specialty.abbreviation }}-{{ group.admission_year
                }}{{ group.subgroup }}
              </span>
            </div>
          </template>
        </td>
      </tr>
      <!-- <tr>
        <td>Чт</td>
        <td class="cell">
          <div class="icons">
            <i class="small material-icons">create</i>
            <i class="small material-icons" @click="openModal">add</i>
            <i class="small material-icons">delete</i>
          </div>
          <div class="item" :class="{ active: isActive }"></div>
        </td>
        <td class="cell">
          <div class="icons">
            <i class="small material-icons">create</i>
            <i class="small material-icons" @click="openModal">add</i>
            <i class="small material-icons">delete</i>
          </div>
          <div class="item" :class="{ active: isActive }"></div>
        </td>
        <td class="cell">
          <div class="icons">
            <i class="small material-icons">create</i>
            <i class="small material-icons" @click="openModal">add</i>
            <i class="small material-icons">delete</i>
          </div>
          <div class="item" :class="{ active: isActive }"></div>
        </td>
        <td class="cell">
          <div class="icons">
            <i class="small material-icons">create</i>
            <i class="small material-icons" @click="openModal">add</i>
            <i class="small material-icons">delete</i>
          </div>
          <div class="item" :class="{ active: isActive }"></div>
        </td>
        <td class="cell">
          <div class="icons">
            <i class="small material-icons">create</i>
            <i class="small material-icons" @click="openModal">add</i>
            <i class="small material-icons">delete</i>
          </div>
          <div class="item" :class="{ active: isActive }"></div>
        </td>
        <td class="cell">
          <div class="icons">
            <i class="small material-icons">create</i>
            <i class="small material-icons" @click="openModal">add</i>
            <i class="small material-icons">delete</i>
          </div>
          <div class="item" :class="{ active: isActive }"></div>
        </td>
        <td class="cell">
          <div class="icons">
            <i class="small material-icons">create</i>
            <i class="small material-icons" @click="openModal">add</i>
            <i class="small material-icons">delete</i>
          </div>
          <div class="item" :class="{ active: isActive }"></div>
        </td>
      </tr>
      <tr>
        <td>Пт</td>
        <td class="cell">
          <div class="icons">
            <i class="small material-icons">create</i>
            <i class="small material-icons" @click="openModal">add</i>
            <i class="small material-icons">delete</i>
          </div>
          <div class="item" :class="{ active: isActive }"></div>
        </td>
        <td class="cell">
          <div class="icons">
            <i class="small material-icons">create</i>
            <i class="small material-icons" @click="openModal">add</i>
            <i class="small material-icons">delete</i>
          </div>
          <div class="item" :class="{ active: isActive }"></div>
        </td>
        <td class="cell">
          <div class="icons">
            <i class="small material-icons">create</i>
            <i class="small material-icons" @click="openModal">add</i>
            <i class="small material-icons">delete</i>
          </div>
          <div class="item" :class="{ active: isActive }"></div>
        </td>
        <td class="cell">
          <div class="icons">
            <i class="small material-icons">create</i>
            <i class="small material-icons" @click="openModal">add</i>
            <i class="small material-icons">delete</i>
          </div>
          <div class="item" :class="{ active: isActive }"></div>
        </td>
        <td class="cell">
          <div class="icons">
            <i class="small material-icons">create</i>
            <i class="small material-icons" @click="openModal">add</i>
            <i class="small material-icons">delete</i>
          </div>
          <div class="item" :class="{ active: isActive }"></div>
        </td>
        <td class="cell">
          <div class="icons">
            <i class="small material-icons">create</i>
            <i class="small material-icons" @click="openModal">add</i>
            <i class="small material-icons">delete</i>
          </div>
          <div class="item" :class="{ active: isActive }"></div>
        </td>
        <td class="cell">
          <div class="icons">
            <i class="small material-icons">create</i>
            <i class="small material-icons" @click="openModal">add</i>
            <i class="small material-icons">delete</i>
          </div>
          <div class="item" :class="{ active: isActive }"></div>
        </td>
      </tr>
      <tr>
        <td>Сб</td>
        <td class="cell">
          <div class="icons">
            <i class="small material-icons">create</i>
            <i class="small material-icons" @click="openModal">add</i>
            <i class="small material-icons">delete</i>
          </div>
          <div class="item" :class="{ active: isActive }"></div>
        </td>
        <td class="cell">
          <div class="icons">
            <i class="small material-icons">create</i>
            <i class="small material-icons" @click="openModal">add</i>
            <i class="small material-icons">delete</i>
          </div>
          <div class="item" :class="{ active: isActive }"></div>
        </td>
        <td class="cell">
          <div class="icons">
            <i class="small material-icons">create</i>
            <i class="small material-icons" @click="openModal">add</i>
            <i class="small material-icons">delete</i>
          </div>
          <div class="item" :class="{ active: isActive }"></div>
        </td>
        <td class="cell">
          <div class="icons">
            <i class="small material-icons">create</i>
            <i class="small material-icons" @click="openModal">add</i>
            <i class="small material-icons">delete</i>
          </div>
          <div class="item" :class="{ active: isActive }"></div>
        </td>
        <td class="cell">
          <div class="icons">
            <i class="small material-icons">create</i>
            <i class="small material-icons" @click="openModal">add</i>
            <i class="small material-icons">delete</i>
          </div>
          <div class="item" :class="{ active: isActive }"></div>
        </td>
        <td class="cell">
          <div class="icons">
            <i class="small material-icons">create</i>
            <i class="small material-icons" @click="openModal">add</i>
            <i class="small material-icons">delete</i>
          </div>
          <div class="item" :class="{ active: isActive }"></div>
        </td>
        <td class="cell">
          <div class="icons">
            <i class="small material-icons">create</i>
            <i class="small material-icons" @click="openModal">add</i>
            <i class="small material-icons">delete</i>
          </div>
          <div class="item" :class="{ active: isActive }"></div>
        </td>
      </tr>
      <tr>
        <td>Вс</td>
        <td class="cell">
          <div class="icons">
            <i class="small material-icons">create</i>
            <i class="small material-icons" @click="openModal">add</i>
            <i class="small material-icons">delete</i>
          </div>
          <div class="item" :class="{ active: isActive }"></div>
        </td>
        <td class="cell">
          <div class="icons">
            <i class="small material-icons">create</i>
            <i class="small material-icons" @click="openModal">add</i>
            <i class="small material-icons">delete</i>
          </div>
          <div class="item" :class="{ active: isActive }"></div>
        </td>
        <td class="cell">
          <div class="icons">
            <i class="small material-icons">create</i>
            <i class="small material-icons" @click="openModal">add</i>
            <i class="small material-icons">delete</i>
          </div>
          <div class="item" :class="{ active: isActive }"></div>
        </td>
        <td class="cell">
          <div class="icons">
            <i class="small material-icons">create</i>
            <i class="small material-icons" @click="openModal">add</i>
            <i class="small material-icons">delete</i>
          </div>
          <div class="item" :class="{ active: isActive }"></div>
        </td>
        <td class="cell">
          <div class="icons">
            <i class="small material-icons">create</i>
            <i class="small material-icons" @click="openModal">add</i>
            <i class="small material-icons">delete</i>
          </div>
          <div class="item" :class="{ active: isActive }"></div>
        </td>
        <td class="cell">
          <div class="icons">
            <i class="small material-icons">create</i>
            <i class="small material-icons" @click="openModal">add</i>
            <i class="small material-icons">delete</i>
          </div>
          <div class="item" :class="{ active: isActive }"></div>
        </td>
        <td class="cell">
          <div class="icons">
            <i class="small material-icons">create</i>
            <i class="small material-icons" @click="openModal">add</i>
            <i class="small material-icons">delete</i>
          </div>
          <div class="item" :class="{ active: isActive }"></div>
        </td>
      </tr> -->
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
    instance: null
  }),
  computed: {
    ...mapState({
      isLoading: state => state.timetable.isLoading,
      error: state => state.timetable.error,
      timetable: state => state.timetable
    })
  },
  beforeMount() {
    console.log('d', this.timetable);
    this[[actionTypes.getTimetable]]();
    // this[[actionTypes.deleteTimetable]]();
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
    // sliceYear: function() {
    //   return String(Object.values(this.timetable.groups.admission_year)).slice(
    //     2
    //   );
    // },
    ...mapActions([actionTypes.getTimetable])
    // ...mapActions([actionTypes.deleteTimetable]),
  }
};
</script>
