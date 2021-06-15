<template>
  <timetable-form
    :initial-values="initialValues"
    :isSubmiting="true"
    @timetableSubmit="onSubmit"
  ></timetable-form>
</template>

<script>
import {mapState, mapActions} from 'vuex';
import TimetableForm from '@/components/app/TimetableForm';
import {actionTypes} from '@/store/modules/createTimetable';

export default {
  name: 'CreateTimetable',
  components: {TimetableForm},
  data() {
    return {
      initialValues: {
        subject: '',
        lecturer: {},
        building: {},
        typeSubject: '',
        groups: {}
      }
    };
  },
  computed: {
    ...mapState({
      isSubmitting: state => state.createTimetable.isSubmiting,
      validationErrors: state => state.createTimetable.validationErrors
    })
  },

  methods: {
    ...mapActions([actionTypes.createTimetable]),
    onSubmit(timetableInput) {
      this.$store.dispatch(actionTypes.createTimetable, {timetableInput});
    }
  }
};
</script>
