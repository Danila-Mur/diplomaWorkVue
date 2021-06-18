<template>
  <div>
    <div class="page-title">
      <h3>Список кафедр</h3>
      <button
        data-target="modal1"
        class="modal-trigger btn waves-effect waves-light btn-small"
      >
        <a class="modal-trigger" href="#modal1"
          ><i class="material-icons">add</i></a
        >
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
                    ФКНТ
                  </option>
                  <option value="2">
                    корпус 2
                  </option>
                  <option value="3">
                    корпус 3
                  </option>
                </select>
              </div>
            </form>
          </div>
        </div>
        <div class="row"></div>
        <div class="row">
          <div class="col s6">Кафедра</div>
          <div class="col s6">Логотип</div>
        </div>
        <div class="row">
          <div class="col s6">Кафедра компьютерной инженерии</div>
          <div class="col s6">
            <img
              src="@/assets/kafedra_kompyuternoy_inzhenerii.png"
              alt="Кафедра компьютерной инженерии"
              class="faculties-logo"
            />
          </div>
        </div>
        <div class="row">
          <div class="col s6">Кафедра прикладной математики</div>
          <div class="col s6">
            <img
              src="@/assets/kafedra_prikladnoy_matematiki.jpg"
              alt="Кафедра прикладной математики"
              class="faculties-logo"
            />
          </div>
        </div>
        <div class="row">
          <div class="col s6">
            Кафедра программной инженерии им. Л. П. Фельдмана
          </div>
          <div class="col s6">
            <img
              src="@/assets/kaf.png"
              alt="Кафедра программной инженерии им. Л. П. Фельдмана"
              class="faculties-logo"
            />
          </div>
        </div>
        <div class="row">
          <div class="col s6">
            Кафедра искусственного интеллекта и системного анализа
          </div>
          <div class="col s6">
            <img
              src="@/assets/saim.png"
              alt="Кафедра искусственного интеллекта и системного анализа"
              class="faculties-logo"
            />
          </div>
        </div>
        <div class="row">
          <div class="col s6">
            Кафедра компьютерного моделирования и дизайна
          </div>
          <div class="col s6">
            <img
              src="@/assets/kafedra_kompyuternogo_modelirovaniya_i_monitoringa.png"
              alt="Кафедра компьютерного моделирования и дизайна"
              class="faculties-logo"
            />
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
