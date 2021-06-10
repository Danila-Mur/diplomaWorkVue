<template>
  <div>
    <div class="page-title">
      <h3>Мое расписание общее</h3>
    </div>
    <table class="timetable centered" cellpadding="5">
      <tr class="timetable">
        <td></td>
        <td>1</td>
        <td>2</td>
        <td>3</td>
        <td>4</td>
        <td>5</td>
        <td>6</td>
        <td>7</td>
      </tr>
      <!-- <tr v-for="day of Object(data.timetable)"> -->
      <!-- <tr data.timetable[key]> -->
      <tr>
        <td>Пн</td>
        <td class="cell">
          <div class="cell__wrapper">
            <div class="icons">
              <i class="small material-icons">create</i>
              <i class="small material-icons" @click="openModal">add</i>
              <i class="small material-icons">delete</i>
            </div>
            <div class="item" :class="{ active: isActive }">
              <!-- <span>Численные методы в информатике</span>
              <br />
              <span>Судаков С.Н.</span>
              <br />
              <span>5.427</span>
              <span>Лекция</span> <br />
              <span>Пи-17А</span> -->
            </div>
          </div>
          <hr />
          <div class="cell__wrapper">
            <div class="icons">
              <i class="small material-icons">create</i>
              <i class="small material-icons" @click="openModal">add</i>
              <i class="small material-icons">delete</i>
            </div>
            <div class="item" :class="{ active: isActive }">
              <!-- <span>Гражданская оборона</span>
              <br />
              <span>Ефимов В.Г.</span>
              <br />
              <span>2.234</span><br />
              <span>Лекция</span><br />
              <span>Пи-17А</span> -->
            </div>
          </div>
        </td>
        <td class="cell">
          <div class="cell__wrapper">
            <div class="icons">
              <i class="small material-icons">create</i>
              <i class="small material-icons" @click="openModal">add</i>
              <i class="small material-icons">delete</i>
            </div>
            <div class="item" :class="{ active: isActive }">
              <!-- <span>Численные методы в информатике</span>
              <br />
              <span>Судаков С.Н.</span>
              <br />
              <span>5.427</span>
              <span>Лекция</span> <br />
              <span>Пи-17А</span> -->
            </div>
            <hr />
            <div class="cell__wrapper">
              <div class="icons">
                <i class="small material-icons">create</i>
                <i class="small material-icons" @click="openModal">add</i>
                <i class="small material-icons">delete</i>
              </div>
              <div class="item" :class="{ active: isActive }">
                <!-- <span>Гражданская оборона</span>
                <br />
                <span>Ефимов В.Г.</span>
                <br />
                <span>2.234</span><br />
                <span>Лекция</span><br />
                <span>Пи-17А</span> -->
              </div>
            </div>
          </div>
        </td>
        <td class="cell">
          <div class="cell__wrapper">
            <div class="icons">
              <i class="small material-icons">create</i>
              <i class="small material-icons" @click="openModal">add</i>
              <i class="small material-icons">delete</i>
            </div>
            <div class="item" :class="{ active: isActive }">
              <span></span>
              <br />
              <span></span>
              <br />
              <span></span> <br />
              <span></span>
            </div>
            <hr />
            <div class="cell__wrapper">
              <div class="icons">
                <i class="small material-icons">create</i>
                <i class="small material-icons" @click="openModal">add</i>
                <i class="small material-icons">delete</i>
              </div>
              <div v-if="timetable" class="item" :class="{ active: isActive }">
                <span>{{ timetable.subject }}</span>
                <br />
                <span>{{ timetable.teachers }}</span>
                <br />
                <span>{{ timetable.building }}</span
                ><br />
                <span>{{ timetable.typeSubject }}</span
                ><br />
                <span>{{ timetable.groups }}</span>
              </div>
            </div>
          </div>
        </td>
        <td class="cell">
          <div class="cell__wrapper">
            <div class="icons">
              <i class="small material-icons">create</i>
              <i class="small material-icons" @click="openModal">add</i>
              <i class="small material-icons">delete</i>
            </div>
            <div class="item" :class="{ active: isActive }">
              <!-- <span>Численные методы в информатике</span>
              <br />
              <span>Судаков С.Н.</span>
              <br />
              <span>5.427</span>
              <span>Лекция</span> -->
            </div>
          </div>
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
        <td>Вт</td>
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
        <td>Ср</td>
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
      </tr>
    </table>

    <timetable-form :isModalOpen="iconHidden" />
  </div>
</template>

<script>
import TimetableForm from '@/components/app/TimetableForm';
import { actionTypes } from '@/store/modules/timetable';
import { mapActions, mapState } from 'vuex';
import M from 'materialize-css';
import 'vue-select/dist/vue-select.css';
export default {
  components: {
    TimetableForm,
  },
  data: () => ({
    isActive: false,
    iconVisibillity: false,
    iconHidden: false,
    modalClass: '.modal',
    instance: null,
  }),
  computed: {
    ...mapState({
      isLoading: (state) => state.timetable.isLoading,
      error: (state) => state.timetable.error,
      timetable: (state) => state.timetable.data,
    }),
  },
  beforeMount() {
    this[[actionTypes.getTimetable]]();
  },
  mounted() {
    this.initModal();
  },
  methods: {
    initModal: function() {
      M.Modal.init(this.$refs.modal, {
        opacity: 0.7,
      });
      this.instance = M.Modal.getInstance(this.$refs.modal);
    },
    openModal: function() {
      this.iconHidden = !this.iconHidden;
    },
    ...mapActions([actionTypes.getTimetable]),
  },
};
</script>
