<template>
  <div>
    <div class="page-title">
      <h3>Расписание другого преподавателя</h3>
      <form class="form">
        <div class="row">
          <div class="col s6">
            <select class="browser-default">
              <option value="" disabled selected>
                Выберите кафедру
              </option>
              <option value="1">
                Программная инженерия
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
                Выберите преподавателя
              </option>
              <option value="1">
                Щедрин Сергей Валерьевич
              </option>
              <option value="2">
                кафедра 2
              </option>
              <option value="3">
                кафедра 3
              </option>
            </select>
          </div>
        </div>
      </form>
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
          <span>Базы данных</span>
          <br />
          <span>Щедрин Сергей Валерьевич</span>
          <br />
          <span>8.705</span><br />
          <span>Лекция</span><br />
          <span>Пи-17А Пи-17Б Пи-17В </span>
        </td>
        <td></td>
        <td></td>
        <td>
          <span>Базы данных</span>
          <br />
          <span>Щедрин Сергей Валерьевич</span>
          <br />
          <span>8.705</span><br />
          <span>Лекция</span><br />
          <span>Пи-17А Пи-17Б Пи-17В </span>
        </td>
        <td></td>
        <td></td>
      </tr>
      <tr>
        <td>Tue</td>
        <td>
          <span>Базы данных</span>
          <br />
          <span>Щедрин Сергей Валерьевич</span>
          <br />
          <span>8.705</span><br />
          <span>Лекция</span><br />
          <span>Пи-17А Пи-17Б Пи-17В </span>
        </td>
        <td>
          <span>Базы данных</span>
          <br />
          <span>Щедрин Сергей Валерьевич</span>
          <br />
          <span>8.705</span><br />
          <span>Лекция</span><br />
          <span>Пи-17А Пи-17Б Пи-17В </span>
        </td>
        <td></td>
        <td>
          <span>Базы данных</span>
          <br />
          <span>Щедрин Сергей Валерьевич</span>
          <br />
          <span>8.705</span><br />
          <span>Лекция</span><br />
          <span>Пи-17А Пи-17Б Пи-17В </span>
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
          <span>Базы данных</span>
          <br />
          <span>Щедрин Сергей Валерьевич</span>
          <br />
          <span>8.705</span><br />
          <span>Лекция</span><br />
          <span>Пи-17А Пи-17Б Пи-17В </span>
          <hr>
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
