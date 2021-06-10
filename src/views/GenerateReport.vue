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
                    <option value="3">Почасовка</option>
                </select>
            </div>
            <div class="col s4">
                <select class="browser-default" v-model="selectedTask" 
                    @change="onChacnge()">
                    <option value="" disabled selected>Выберите семестр или месяц</option>
                    <option value="Semester"  >Семестр</option>
                    <option value="Month" >Месяц</option>
                </select>
            </div>
        </div>
        <div class="row"  value="Semester">
            <div class="col s4" >
                <select class="browser-default">
                    <option value="" disabled selected>Выберите семестр</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                </select>
            </div>
            <div class="col s4">
                <date-picker v-model="date1"  type="year" placeholder="Начало учебного года"></date-picker>
            </div>
        </div>
        <div class="row"  value="Month">
            <div class="col s4">
                <date-picker v-model="date2" :lang="lang" type="month" placeholder="Выберите дату"></date-picker>
            </div>
        </div>
        <div class="row">
            <div class="col s4">
                <select class="browser-default">
                    <option value="" disabled selected>Выберите факультет</option>
                    <option value="1">факультет 1</option>
                    <option value="2">факультет 2</option>
                </select>
            </div>
            <div class="col s4">
                <select class="browser-default">
                    <option value="" disabled selected>Выберите кафедру</option>
                    <option value="1">кафедра 1</option>
                    <option value="2">кафедра 2</option>
                </select>
            </div>
            <div class="col s4">
                <select class="browser-default">
                    <option value="" disabled selected>Выберите преподавателя</option>
                    <option value="1">преподаватель 1</option>
                    <option value="2">преподаватель 2</option>
                </select>
            </div>
        </div>
        </form>
        <button class="btn waves-effect waves-light" type="submit" name="action">
            Сгенерировать отчет <i class="material-icons right">send</i>
        </button>
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
    },
    methods: {
        onChange: function onChange() {
            if (event.target.value == this.selectedTask) {
                this.Semester = true
            } else {
                this.Month = true
            }
        }
    }
}
</script>
