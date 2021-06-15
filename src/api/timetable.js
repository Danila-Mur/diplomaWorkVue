import axios from '@/api/axios';

const getTimetable = () => {
  return axios.get(`/timetable`).then((response) => response.data);
};

const deleteTimetable = () => {
  return axios.delete(`/timetable`);
};

const createTimetable = (timetableInput) => {
  return axios
    .post('/timetable', { timetable: timetableInput })
    .then((response) => response.data);
};

export default {
  getTimetable,
  deleteTimetable,
  createTimetable,
};
