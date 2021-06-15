import timetableApi from '@/api/timetable';

const state = {
  data: null,
  isLoading: false,
  error: null,
};

export const mutationTypes = {
  getTimetableStart: '[timetable] Get timetable start',
  getTimetableSuccess: '[timetable] Get timetable success',
  getTimetableFailure: '[timetable] Get timetable failure',

  deleteTimetableStart: '[timetable] Delete timetable start',
  deleteTimetableSuccess: '[timetable] Delete timetable success',
  deleteTimetableFailure: '[timetable] Delete timetable failure',
};

export const actionTypes = {
  getTimetable: '[timetable] Get timetable',
  deleteTimetable: '[timetable] Delete timetable',
};

const mutations = {
  [mutationTypes.getTimetableStart](state) {
    state.isLoading = true;
    state.data = null;
  },
  [mutationTypes.getTimetableSuccess](state, payload) {
    state.isLoading = false;
    state.data = payload;
  },
  [mutationTypes.getTimetableFailure](state) {
    state.isLoading = false;
  },
  [mutationTypes.deleteTimetableStart]() {},
  [mutationTypes.deleteTimetableSuccess]() {},
  [mutationTypes.deleteTimetableFailure]() {},
};

const actions = {
  [actionTypes.getTimetable]({ commit }) {
    commit(mutationTypes.getTimetableStart);
    return new Promise((resolve) => {
      timetableApi
        .getTimetable()
        .then((timetable) => {
          commit(mutationTypes.getTimetableSuccess, timetable);
          resolve(timetable);
        })
        .catch(() => {
          commit(mutationTypes.getTimetableFailure);
        });
    });
  },
  [actionTypes.deleteTimetable]({ commit }) {
    return new Promise((resolve) => {
      commit(mutationTypes.deleteTimetableStart);
      timetableApi
        .deleteTimetable()
        .then(() => {
          commit(mutationTypes.deleteTimetableSuccess);
          resolve();
        })
        .catch(() => {
          commit(mutationTypes.deleteTimetableFailure);
        });
    });
  },
};

export default {
  state,
  actions,
  mutations,
};
