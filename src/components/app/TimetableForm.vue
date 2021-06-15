<template>
  <div>
    <div
      id="modal1"
      class="modal modal-fixed-footer"
      :class="modalClass"
      ref="modal"
    >
      <div class="modal-content">
        <h5>Добавить пару</h5>
        <form class="col s15">
          <div class="row">
            <div class="input-field col s5">
              <model-select
                :options="subjectOptions"
                v-model="subject"
                placeholder="Выберите название предмета"
              ></model-select>
            </div>
            <div class="input-field col s5">
              <model-select
                :options="typeOptions"
                v-model="typeSubject"
                placeholder="Выберите тип предмета"
              ></model-select>
            </div>
            <div class="input-field col s5">
              <model-select
                :options="buildingOptions"
                v-model="building"
                placeholder="Выберите корпус"
              ></model-select>
            </div>
            <div class="input-field col s5">
              <model-select
                :options="paymentOptions"
                v-model="typePayment"
                placeholder="Выберите тип оплаты"
              ></model-select>
            </div>
          </div>
          <div class="row">
            <h5>Выберите группы, присутствующие на паре</h5>

            <div class="input-field col s5">
              <model-select
                :options="facultyOptions"
                v-model="faculties"
                placeholder="Выберите факультет"
              ></model-select>
            </div>
            <div class="input-field col s5">
              <model-select
                :options="departmentOptions"
                v-model="departments"
                placeholder="Выберите кафедру"
              ></model-select>
            </div>
            <div class="input-field col s5">
              <multi-select
                class="browser-default"
                :options="groupOptions"
                :selected-options="groups"
                placeholder="Выберите группы"
                @select="onSelect"
              ></multi-select>
            </div>
          </div>
          <div class="row">
            <h5>Выберите преподавателей, присутствующих на паре</h5>
            <div class="input-field col s4">
              <model-select
                :options="facultyOptions"
                v-model="faculties"
                placeholder="Выберите факультет"
              ></model-select>
            </div>
            <div class="input-field col s4">
              <model-select
                :options="departmentOptions"
                v-model="departments"
                placeholder="Выберите кафедру"
              ></model-select>
            </div>
            <div class=" col s5">
              <multi-select
                class="browser-default"
                :options="teacherOptions"
                :selected-options="teachers"
                placeholder="Выберите преподавателей"
                @select="onSelect"
              ></multi-select>
            </div>
            <date-picker
              v-model="datePeriod"
              type="date"
              placeholder="Выберите период проведения пары"
              range
            ></date-picker>
          </div>
        </form>
      </div>
      <div class="modal-footer">
        <button
          class="modal-action modal-close waves-effect waves-light btn-flat"
        >
          Добавить
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import M from 'materialize-css';
import 'vue2-datepicker/index.css';
import 'vue-search-select/dist/VueSearchSelect.css';
// import _ from 'lodash';
import {MultiSelect, ModelSelect} from 'vue-search-select';
import {mapState} from 'vuex';
export default {
  name: 'TimetableForm',
  components: {MultiSelect, ModelSelect},
  data: () => ({
    modalClass: '.modal',
    instance: null,
    showModal: false,
    datePeriod: null,
    timetable: {},
    subjectOptions: [
      {value: '1', text: 'Предмет' + ' - ' + '1'},
      {value: '2', text: 'Предмет ' + ' - ' + '2'},
      {value: '3', text: 'Предмет' + ' - ' + '3'},
      {value: '4', text: 'Предмет' + ' - ' + '4'},
      {value: '5', text: 'Предмет' + ' - ' + '5'}
    ],
    subject: {
      name: ''
    },
    teacherOptions: [
      {value: '1', text: 'aa' + ' - ' + '1'},
      {value: '2', text: 'ab' + ' - ' + '2'},
      {value: '3', text: 'bc' + ' - ' + '3'},
      {value: '4', text: 'cd' + ' - ' + '4'},
      {value: '5', text: 'de' + ' - ' + '5'}
    ],
    searchText: '', // If value is falsy, reset searchText & searchItem
    teachers: [],
    groupOptions: [
      {value: '1', text: 'ПИ' + ' - ' + '1'},
      {value: '2', text: 'МИД' + ' - ' + '2'},
      {value: '3', text: 'Группа' + ' - ' + '3'},
      {value: '4', text: 'cd' + ' - ' + '4'},
      {value: '5', text: 'de' + ' - ' + '5'}
    ],
    searchTextGroups: '', // If value is falsy, reset searchText & searchItem
    groups: [],
    lastSelectItem: {},

    typeOptions: [
      {value: '1', text: 'Лекция' + ' - ' + '1'},
      {value: '2', text: 'Практика ' + ' - ' + '2'},
      {value: '3', text: 'Нирс' + ' - ' + '3'},
      {value: '4', text: 'Курсовой' + ' - ' + '4'}
    ],
    typeSubject: {
      value: '',
      text: ''
    },
    buildingOptions: [
      {value: '1', text: '1'},
      {value: '2', text: '2'},
      {value: '3', text: '3'},
      {value: '4', text: '4'}
    ],
    building: {
      value: '',
      text: ''
    },
    paymentOptions: [
      {value: '1', text: 'Ставка'},
      {value: '2', text: 'Пол ставки'}
    ],
    typePayment: {
      value: '',
      text: ''
    },
    facultyOptions: [
      {value: '1', text: 'ФКТ'},
      {value: '2', text: 'ФЭХТ'}
    ],
    faculties: {
      value: '',
      text: ''
    },
    departmentOptions: [
      {value: '1', text: 'ФКТ'},
      {value: '2', text: 'ФЭХТ'}
    ],
    departments: {
      value: '',
      text: ''
    }
  }),
  computed: {
    ...mapState({
      isSubmitting: state => state.createTimetable.isSubmitting,
      validationErrors: state => state.createTimetable.validationErrors
    })
  },
  props: {
    isModalOpen: Boolean,
    initialValues: {
      type: Object
      // required: true,
    },
    errors: {
      type: Object,
      required: false
    }
  },
  mounted() {
    this.initModal();
  },
  watch: {
    isModalOpen(curr) {
      curr && this.openModal();
    }
  },
  methods: {
    initModal: function() {
      M.Modal.init(this.$refs.modal, {
        opacity: 0.7
      });
      this.instance = M.Modal.getInstance(this.$refs.modal);
    },
    openModal: function() {
      this.instance.open();
    },
    onSubmit() {
      const timetableForm = {
        subject: this.timetable.subject.name,
        lecturer: {
          last_name: this.timetable.lecturer.last_name,
          first_name: this.timetable.lecturer.first_name,
          middle_name: this.timetable.lecturer.middle_name
        },
        building: {
          building_number: this.timetable.auditorium.building_number,
          auditorium_number: this.timetable.auditorium.auditorium_number
        },
        typeSubject: this.timetable.lesson_type.type,
        groups: {
          specialty: this.timetable.specialty.abbreviation,
          admission_year: this.timetable.admission_year,
          subgroup: this.timetable.subgroup
        }
      };
      this.$emit('timetableSubmit', timetableForm);
    },

    // resetSubjects() {
    //   this.subjects = {};
    // },
    // selectSubjects() {
    //   this.subjects = this.subjectOptions[0];
    // },
    onSelect(items, lastSelectItem) {
      this.items = items;
      this.lastSelectItem = lastSelectItem;
    }
    // // deselect option
    // reset() {
    //   this.items = []; // reset
    // },
    // // select option from parent component
    // selectFromParentComponent() {
    //   this.items = _.unionWith(this.items, [this.options[0]], _.isEqual);
    // },
  }
};
</script>
