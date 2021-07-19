<template>
    <div>
        <div class="page-title">
            <h3>Сгенерировать отчет</h3>
        </div>

        <form action="#">
            <div class="row">
              <div class="col s4">
                  <select class="browser-default">
                      <option value="" disabled selected>Выберите тип оплаты</option>
                      <option value="1">Ставка</option>
                      <option value="2">Пол ставки</option>
                      
                  </select>
              </div>
              
              <div class="col s4" >
                  <select class="browser-default">
                      <option value="" disabled selected>Выберите семестр</option>
                      <option value="1">1</option>
                      
                  </select>
              </div>
            </div>
            <div class="col s4">
                <date-picker v-model="date1"  type="year" placeholder="Начало учебного года"></date-picker>
            </div>
        <div class="row">
        <button class="btn waves-effect waves-light" type="submit" name="action">
            Сгенерировать отчет <i class="material-icons right">send</i>
        </button>
        </div>
        </form>
    </div>
</template>

<script>
import DatePicker from 'vue2-datepicker';
import 'vue2-datepicker/index.css';


export default {
    components: DatePicker,
    data() {
        return {
            date1: null,
            date2: null,
            lang: {
                formatLocale: {
                    monthsShort: ['Янв', 'Фев', 'Мар', 'Апр', 'Май', 'Июн', 'Июл', 'Авг', 'Сен', 'Окт', 'Ноя', 'Дек'],
                    weekdaysMin: ['Вс','Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'],
                    firstDayOfWeek: 1
                }
            },
        }
    }
}

</script>
