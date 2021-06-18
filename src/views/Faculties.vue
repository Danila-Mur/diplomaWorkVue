<template>
  <div>
    <div class="page-title">
      <h3>Список факультетов</h3>
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
        <div class="col s6">Факультет</div>
        <div class="col s6">Логотип</div>
      </div>
      <div class="row">
        <div class="col s6">Горный факультет</div>
        <div class="col s6">
          <img
            src="@/assets/gornyy_fakultet.png"
            alt="Горный факультет"
            class="faculties-logo"
          />
        </div>
      </div>
      <div class="row">
        <div class="col s6">Инженерно-экономический факультет</div>
        <div class="col s6">
          <img
            src="@/assets/emblema_ief.jpg"
            alt="Инженерно-экономический факультет"
            class="faculties-logo"
          />
        </div>
      </div>
      <div class="row">
        <div class="col s6">
          Факультет компьютерных информационных технологий и автоматики
        </div>
        <div class="col s6">
          <img
            src="@/assets/fakultet_kompyuternyh_informacionnyh_tehnologii_i_avtomatiki.png"
            alt="Факультет компьютерных информационных технологий и автоматики"
            class="faculties-logo"
          />
        </div>
      </div>
      <div class="row">
        <div class="col s6">Факультет компьютерных наук и технологий</div>
        <div class="col s6">
          <img
            src="@/assets/fknt.png"
            alt="Факультет компьютерных наук и технологий"
            class="faculties-logo"
          />
        </div>
      </div>
      <div class="row">
        <div class="col s6">Факультет металлургии и теплоэнергетики</div>
        <div class="col s6">
          <img
            src="@/assets/fakultet_metallurgii_i_teploenergetiki.png"
            alt="Факультет металлургии и теплоэнергетики"
            class="faculties-logo"
          />
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'Faculties'
};
</script>
