<script>
import axios from "axios";

export default {
  name: "CourseOverview",
  data(){
    return {
      registrations: [],
      selectedRegistration: null,
    }
  },
  async created() {
    await this.fetchRegistrations();

    this.selectedRegistration = this.findSelectedFromRouteParam(this.$route);
  },

  methods: {
    findSelectedFromRouteParam(route) {
      return this.registrations.find((registration) => registration.id === parseInt(route.params['id']));
    },
    async fetchRegistrations() {
      try {
        //Clear the registrations array
        this.registrations = [];

        // Simulate API call to fetch registrations
        const response = await axios.get('http://localhost:3000/api/registrations/');
        response.data.map(reg => {
          this.registrations.push(reg);
        });
      } catch (error) {
        console.error('Error fetching registrations:', error);
      }
    },
    selectRegistration(registration){
      if (registration === this.selectedRegistration){
        this.selectedRegistration = null;
        this.$router.push('/courses');
      } else {
        this.selectedRegistration = registration;
        this.$router.push('/courses/' + registration.id);
      }
    },
    async handleDelete(registration) {
      if (registration) {
        try {
          // Delete registration
          await axios.delete(`http://localhost:3000/api/registrations/${registration.id}`);

          await this.fetchRegistrations();

          this.$router.push('/courses');
        } catch (error) {
          console.error('Error deleting registration:', error);
        }
      }
    },
    async handleUpdate(updatedRegistration) {
      if (updatedRegistration) {
        try {
          console.log(updatedRegistration)
          // Update registration
          const response = await axios.put(`http://localhost:3000/api/registrations/${updatedRegistration.id}`, updatedRegistration);

          if (response.status === 200) {
            await this.fetchRegistrations();
            this.$router.push('/courses');
          }
        } catch (error) {
          console.error('Error updating registration:', error);
        }
      }
    }
  }
}
</script>

<template>
  <div class="flex flex-col p-4 space-y-4">

    <div class="flex flex-1 flex-row space-x-4">
      <div class="max-h-[100%] border-2 border-gray-200 sm:w-1/4 w-1/3 overflow-y-scroll">
        <div class="flex justify-center items-center p-3 font-bold border-b-2 border-b-gray-200">
          <h1>Students</h1>
        </div>
        <ul>
          <li
              v-for="student in registrations"
              :key="student.id"
              @click="selectRegistration(student)"
              :class="{
      'bg-black text-white hover:bg-black': selectedRegistration && student.id === selectedRegistration.id,
      'hover:bg-gray-300 hover:cursor-pointer': true
    }"
              class="text-center p-3 border-b-2 border-b-gray-200 font-semibold"
          >
            {{ student.name }}
          </li>
        </ul>
      </div>
      <router-view :selectedRegistration="selectedRegistration"
                   @delete-registration="handleDelete"
                   @update-registration="handleUpdate"
                   class="flex-1 max-h-[100%]"></router-view>
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