<template>
  <div>
    <div class="page-title">
      <h3>Список аудиторий</h3>
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
                    Выберите корпус
                  </option>
                  <option value="1">
                    корпус №1
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
          <div class="col s6">Корпус</div>
          <div class="col s6">Аудитория</div>
        </div>
        <div class="row">
          <div class="col s6">1</div>
          <div class="col s6">6</div>
        </div>
        <div class="row">
          <div class="col s6">1</div>
          <div class="col s6">11</div>
        </div>
        <div class="row">
          <div class="col s6">1</div>
          <div class="col s6">14</div>
        </div>
        <div class="row">
          <div class="col s6">1</div>
          <div class="col s6">25</div>
        </div>
        <div class="row">
          <div class="col s6">1</div>
          <div class="col s6">23</div>
        </div>
      </div>
    </section>
  </div>

  <!-- Modal Structure -->
  <!--  <div id="modal1" class="modal modal-fixed-footer">
		<div class="modal-content">
			<h5>Добавить аудиторию</h5>
			<form class="col s12">
				<div class="row">
					<div class="input-field col s6">
						<input id="corps" type="number" class="validate" />
						<label for="corps ">Введите корпус</label>
					</div>
					<div class="input-field col s6">
						<input id="audience" type="number" class="validate" />
						<label for="audience">Введите номер аудитории</label>
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
	</div> -->
</template>
