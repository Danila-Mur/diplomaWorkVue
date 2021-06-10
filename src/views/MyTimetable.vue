<template>
  <div>
    <div class="page-title">
      <h3>Мое расписание понедельно</h3>
      <date-picker
        v-model="date1"
        type="week"
        :lang="lang"
        placeholder="Выберите неделю"
      ></date-picker>
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
      <tr>
        <td>Пн</td>
        <td>
          <span>Численные методы в информатике</span>
          <br />
          <span>Судаков С.Н.</span>
          <br />
          <span>5.427</span>
          <span>Лекция</span>
          <hr />
          <span>Гражданская оборона</span>
          <br />
          <span>Ефимов В.Г.</span>
          <br />
          <span><br />2.234</span><br />
          <span><br />Лекция</span><br />
          <span>Группа </span>
          <span>Пи-17А</span>
        </td>
        <td>
          <span>Численные методы в информатике</span>
          <br />
          <span>Судаков С.Н.</span>
          <br />
          <span>5.427</span>
          <span>Лекция</span>
        </td>
        <td>
          <span>Численные методы в информатике</span>
          <br />
          <span>Судаков С.Н.</span>
          <br />
          <span>5.427</span>
          <span>Лекция</span>
        </td>
        <td>
          <span>Численные методы в информатике</span>
          <br />
          <span>Судаков С.Н.</span>
          <br />
          <span>5.427</span>
          <span>Лекция</span>
        </td>
        <td>
          <span>Численные методы в информатике</span>
          <br />
          <span>Судаков С.Н.</span>
          <br />
          <span>5.427</span>
          <span>Лекция</span>
        </td>
        <td>
          <span>Численные методы в информатике</span>
          <br />
          <span>Судаков С.Н.</span>
          <br />
          <span>5.427</span>
          <span>Лекция</span>
        </td>
        <td>
          <span>Численные методы в информатике</span>
          <br />
          <span>Судаков С.Н.</span>
          <br />
          <span>5.427</span>
          <span>Лекция</span>
        </td>
      </tr>
      <tr>
        <td>Вт</td>
        <td>
          <span>Численные методы в информатике</span>
          <br />
          <span>Судаков С.Н.</span>
          <br />
          <span>5.427</span>
          <span>Лекция</span>
          <hr />
          <span>Гражданская оборона</span>
          <br />
          <span>Ефимов В.Г.</span>
          <br />
          <span>2.234</span>
          <span>Лекция</span>
        </td>
        <td>
          <span>Численные методы в информатике</span>
          <br />
          <span>Судаков С.Н.</span>
          <br />
          <span>5.427</span>
          <span>Лекция</span>
          <hr />
          <span>Гражданская оборона</span>
          <br />
          <span>Ефимов В.Г.</span>
          <br />
          <span>2.234</span>
          <span>Лекция</span>
        </td>
        <td>
          <span>Численные методы в информатике</span>
          <br />
          <span>Судаков С.Н.</span>
          <br />
          <span>5.427</span>
          <span>Лекция</span>
          <hr />
          <span>Гражданская оборона</span>
          <br />
          <span>Ефимов В.Г.</span>
          <br />
          <span>2.234</span>
          <span>Лекция</span>
        </td>
        <td>
          <span>Численные методы в информатике</span>
          <br />
          <span>Судаков С.Н.</span>
          <br />
          <span>5.427</span>
          <span>Лекция</span>
          <hr />
          <span>Гражданская оборона</span>
          <br />
          <span>Ефимов В.Г.</span>
          <br />
          <span>2.234</span>
          <span>Лекция</span>
        </td>
        <td>
          <span>Численные методы в информатике</span>
          <br />
          <span>Судаков С.Н.</span>
          <br />
          <span>5.427</span>
          <span>Лекция</span>
          <hr />
          <span>Гражданская оборона</span>
          <br />
          <span>Ефимов В.Г.</span>
          <br />
          <span>2.234</span>
          <span>Лекция</span>
        </td>
        <td>
          <span>Численные методы в информатике</span>
          <br />
          <span>Судаков С.Н.</span>
          <br />
          <span>5.427</span>
          <span>Лекция</span>
          <hr />
          <span>Гражданская оборона</span>
          <br />
          <span>Ефимов В.Г.</span>
          <br />
          <span>2.234</span>
          <span>Лекция</span>
        </td>
        <td></td>
      </tr>
      <tr>
        <td>Ср</td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
      </tr>
      <tr>
        <td>Чт</td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
      </tr>
      <tr>
        <td>Пт</td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
      </tr>
      <tr>
        <td>Сб</td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
      </tr>
      <tr>
        <td>Вс</td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
      </tr>
    </table>
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
      lang: {
        formatLocale: {
          monthsShort: [
            'Янв',
            'Фев',
            'Мар',
            'Апр',
            'Май',
            'Июн',
            'Июл',
            'Авг',
            'Сен',
            'Окт',
            'Ноя',
            'Дек',
          ],
          weekdaysMin: ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'],
          firstDayOfWeek: 1,
        },
      },
    };
  },
};
</script>
