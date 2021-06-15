import timetableApi from '@/api/timetable';

const state = {
  isSubmitting: false,
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
  [actionTypes.createTimetable]({ commit }, { timetableInput }) {
    return new Promise((resolve) => {
      commit(mutationTypes.createTimetableStart);
      timetableApi
        .createTimetable(timetableInput)
        .then((timetable) => {
          commit(mutationTypes.createTimetableSuccess, timetable);
          resolve(timetable);
        })
        .catch((result) => {
          commit(
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
