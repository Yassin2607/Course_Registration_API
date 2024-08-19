<script>
import CourseDetail from "@/components/CourseDetail.vue";

export default {
  name: "CourseOverview",
  components: {CourseDetail},
  data(){
    return {
      registrations: [],
      selectedRegistration: null,
    }
  },
  created() {
    this.registrations = Registration.createSampleRegistrations();
  },
  methods: {
    selectRegistration(registration){
      this.selectedRegistration = registration;
      this.$router.push({name: 'CourseDetail', params: {id: registration.id}});
    },
    handleDelete(registration){
      if (registration) {
        this.registrations = this.registrations.filter(reg => reg.id !== registration.id);
        this.selectedRegistration = null;
      }
    },
    handleUpdate(registration){
      if (registration) {
        Object.assign(this.selectedRegistration, registration);
      }
    }
  }
}
</script>

<template>
  <div class="flex flex-col p-4 space-y-4">
    <div>
      <label for="course" class="font-semibold">Selected Course</label>
      <div class="text-black">
        <select id="course" name="course">
          <option>United States</option>
          <option>Canada</option>
          <option>Mexico</option>
        </select>
      </div>
    </div>
    <div class="flex flex-1 flex-row space-x-4">
      <div class="max-h-[80%] border-2 border-gray-200 sm:w-1/4 w-1/3 overflow-y-scroll">
        <div class="flex justify-center items-center p-3 font-bold border-b-2 border-b-gray-200">
          <h1>Students</h1>
        </div>
        <ul>
          <li v-for="student in students" :key="student.id" class="text-center p-3 border-b-2 border-b-gray-200 hover:bg-gray-300 hover:cursor-pointer font-semibold">
            {{ student.name }}
          </li>
        </ul>
      </div>
      <router-view :selectedRegistration="selectedRegistration"
                   @delete-registration="handleDelete"
                   @update-registration="handleUpdate"
                   class="flex-1 max-h-[80%]"></router-view>
    </div>
  </div>

</template>

<style scoped>
input, select{
  color: black;
  padding: 0.5rem;
  font-size: 1rem;
  border-radius: 0.25rem;
}
</style>