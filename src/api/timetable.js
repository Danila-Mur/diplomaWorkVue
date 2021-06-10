import axios from '@/api/axios';

const getTimetable = () => {
  return axios.get(`/timetable`).then((response) => response.data);
};

const deleteTimetable = (slug) => {
  return axios.delete(`/delete/${slug}`);
};

const createTimetable = (timetableInput) => {
  return axios
    .post('/post', { timetable: timetableInput })
    .then((response) => response.data.timetable);
};

export default {
  getTimetable,
  deleteTimetable,
  createTimetable,
};
