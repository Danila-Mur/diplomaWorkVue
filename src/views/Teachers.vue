<template>
  <div>
    <div class="page-title">
      <h3>Список преподавателей</h3>
      <button
        class="modal-trigger btn waves-effect waves-light btn-small"
        @click="openModal"
      >
        <a class="modal-trigger" href="#"><i class="material-icons">add</i></a>
      </button>
    </div>
    <section>
      <div class="row">
        <div class="col s12">
          <div class="card-content">
            <form class="form">
              <div class="col s6">
                <select class="browser-default">
                  <option value="" disabled selected>
                    Выберите факультет
                  </option>
                  <option value="1">
                    факультет 1
                  </option>
                  <option value="2">
                    факультет 2
                  </option>
                  <option value="3">
                    факультет 3
                  </option>
                </select>
              </div>
              <div class="col s6">
                <select class="browser-default">
                  <option value="" disabled selected>
                    Выберите кафедру
                  </option>
                  <option value="1">
                    кафедра 1
                  </option>
                  <option value="2">
                    кафедра 2
                  </option>
                  <option value="3">
                    кафедра 3
                  </option>
                </select>
              </div>
            </form>
          </div>
        </div>
        <div class="row"></div>
        <div class="row">
          <div class="col s2">Фамилия</div>
          <div class="col s2">Имя</div>
          <div class="col s2">Отчество</div>
          <div class="col s2">Логин</div>
          <div class="col s2">Фото</div>
          <div class="col s2">
            Предметы преподователя которые может вести
          </div>
        </div>
      </div>
    </section>
    <div
      id="modal1"
      class="modal modal-fixed-footer"
      :class="modalClass"
      ref="modal"
    >
      <div class="modal-content">
        <h5>Добавить преподавателя</h5>
        <form class="col s12">
          <div class="row">
            <div class="input-field col s4">
              <input id="first_name" type="text" class="validate" />
              <label for="first_name">Введите имя</label>
            </div>
            <div class="input-field col s4">
              <input id="last_name" type="text" class="validate" />
              <label for="last_name">Введите фамилию</label>
            </div>
            <div class="input-field col s4">
              <input id="third_name" type="text" class="validate" />
              <label for="third_name">Введите отчество</label>
            </div>
          </div>
          <div class="row">
            <div class="input-field col s4">
              <input id="login" type="text" class="validate" />
              <label for="login">Введите логин</label>
            </div>
            <div class="input-field col s4">
              <input id="password" type="text" class="validate" />
              <label for="password">Введите пароль</label>
            </div>
            <div class="input-field file-field col s4">
              <div class="btn">
                <span>File</span>
                <input type="file" />
              </div>
              <div class="file-path-wrapper">
                <input class="file-path validate" type="text" />
              </div>
            </div>
          </div>
          <div class="row">
            <div class="input-field col s4">
              <select class="browser-default">
                <option value="" disabled selected>
                  Выберите факультет
                </option>
                <option value="1">
                  факультет 1
                </option>
                <option value="2">
                  факультет 2
                </option>
                <option value="3">
                  факультет 3
                </option>
              </select>
            </div>
            <div class="input-field col s4">
              <select class="browser-default">
                <option value="" disabled selected>
                  Выберите кафедру
                </option>
                <option value="1">кафедра 1</option>
                <option value="2">кафедра 2</option>
                <option value="3">кафедра 3</option>
              </select>
            </div>
            <div class="input-field col s4">
              <select class="browser-default">
                <option value="" disabled selected>
                  Выберите должность
                </option>
                <option value="1">
                  должность 1
                </option>
                <option value="2">
                  должность 2
                </option>
                <option value="3">
                  должность 3
                </option>
                <option value="3">
                  должность 4
                </option>
                <option value="3">
                  должность 5
                </option>
                <option value="3">
                  должность 6
                </option>
                <option value="3">
                  должность 7
                </option>
                <option value="3">
                  должность 8
                </option>
                <option value="3">
                  должность 9
                </option>
                <option value="3">
                  должность 10
                </option>
                <option value="3">
                  должность 11
                </option>
              </select>
            </div>
          </div>
        </form>
      </div>
      <div class="modal-footer">
        <a
          href="#!"
          class="modal-action modal-close waves-effect waves-light btn-flat"
          >Добавить</a
        >
      </div>
    </div>
  </div>
</template>

<script>
import M from 'materialize-css';
export default {
  data: () => ({
    modalVisible: false,
    modalClass: '.modal',
    instance: null,
  }),
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
      this.instance.open();
    },
  },
};
</script>
