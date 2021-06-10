<template>
  <timetable-form
    :initial-values="[]"
    :isSubmiting="true"
    @timetableSubmit="() => console.log('submit')"
  ></timetable-form>
</template>

<script>
import { mapState } from 'vuex';
import TimetableForm from '@/components/app/TimetableForm';
import { actionTypes } from '@/store/modules/createTimetable';
import TimetableForm from '../components/app/TimetableForm.vue';
export default {
  name: 'CreateTimetable',
  components: { TimetableForm },
  data() {
    return {
      initialValues: {
        subjects: '',
        teachers: [],
        building: '',
        typeSubject: '',
        groups: [],
      },
    };
  },
  computed: {
    ...mapState({
      isSubmiting: (state) => state.createTimetable.isSubmiting,
      validationErrors: (state) => state.createTimetable.validationErrors,
    }),
  },
  methods: {
    onSubmit(timetableInput) {
      this.$store
        .dispatch(actionTypes.createTimetable, { timetableInput })
        .then((timetable) => {
          this.$router.push({
            name: 'mygeneraltimetable',
            // params: { slug: timetable.slug },
          });
        });
    },
  },
};
</script>
