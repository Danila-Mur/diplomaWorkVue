import timetableApi from '@/api/timetable';

const state = {
  isSubmiting: false,
  validationErrors: null,
};

export const mutationTypes = {
  createTimetableStart: '[createTimetable] Create timetable start',
  createTimetableSuccess: '[createTimetable] Create timetable success',
  createTimetableFailure: '[createTimetable] Create timetable failure',
};

export const actionTypes = {
  createTimetable: '[createTimetable] Create timetable',
};

const mutations = {
  [mutationTypes.createTimetableStart](state) {
    state.isSubmiting = true;
  },
  [mutationTypes.createTimetableSuccess](state) {
    state.isSubmiting = false;
  },
  [mutationTypes.createTimetableFailure](state, payload) {
    state.isSubmiting = false;
    state.validationErrors = payload;
  },
};

const actions = {
  [actionTypes.createTimetable](context, { timetableInput }) {
    return new Promise((resolve) => {
      context.commit(mutationTypes.createTimetableStart);
      timetableApi
        .createTimetable(timetableInput)
        .then((timetable) => {
          context.commit(mutationTypes.createTimetableSuccess, timetable);
          resolve(timetable);
        })
        .catch((result) => {
          context.commit(
            mutationTypes.createTimetableFailure,
            result.response.data.errors
          );
        });
    });
  },
};

export default {
  state,
  actions,
  mutations,
};
