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
        <td>Mon</td>
        <td>
          <span>Гражданская оборона</span>
          <br />
          <span>Ефимов В.Г.</span>
          <br />
          <span>2.234</span><br />
          <span>Лекция</span><br />
          <span>Пи-17А</span>
        </td>
        <td></td>
        <td></td>
        <td>
          <span>Гражданская оборона</span>
          <br />
          <span>Ефимов В.Г.</span>
          <br />
          <span>2.234</span><br />
          <span>Лекция</span><br />
          <span>Пи-17А</span>
        </td>
        <td></td>
        <td></td>
      </tr>
      <tr>
        <td>Tue</td>
        <td>
          <span>Гражданская оборона</span>
          <br />
          <span>Ефимов В.Г.</span>
          <br />
          <span>2.234</span><br />
          <span>Лекция</span><br />
          <span>Пи-17А</span>
        </td>
        <td>
          <span>Гражданская оборона</span>
          <br />
          <span>Ефимов В.Г.</span>
          <br />
          <span>2.234</span><br />
          <span>Лекция</span><br />
          <span>Пи-17А</span>
        </td>
        <td></td>
        <td>
          <span>Гражданская оборона</span>
          <br />
          <span>Ефимов В.Г.</span>
          <br />
          <span>2.234</span><br />
          <span>Лекция</span><br />
          <span>Пи-17А</span>
        </td>
        <td></td>
        <td></td>
        <td></td>
      </tr>
      <tr>
        <td>Wed</td>
        <td></td>
        <td></td>
        <td>
          <span>Гражданская оборона</span>
          <br />
          <span>Ефимов В.Г.</span>
          <br />
          <span>2.234</span><br />
          <span>Лекция</span><br />
          <span>Пи-17А</span>
        </td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
      </tr>
      <tr>
        <td>Thu</td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
      </tr>
      <tr>
        <td>Fri</td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
      </tr>
      <tr>
        <td>Sat</td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
      </tr>
      <tr>
        <td>Sun</td>
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
            'Дек'
          ],
          weekdaysMin: ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'],
          firstDayOfWeek: 1
        }
      }
    };
  }
};
</script>
