<script>
import {Registration} from "@/helpers/Registration";

export default {
  name: "CourseDetail",
  props: {
    selectedRegistration: {
      Registration,
    }
  },
  data(){
    return {
      registration: this.selectedRegistration
    }
  },
  watch: {
    selectedRegistration(){
      this.registration = this.selectedRegistration;
      console.log(this.registration);
    }
  }
}
</script>

<template>
  <div class="border-2 border-gray-200">
    <div>

    </div>
    <div>
      <label for="name">Child's name</label>
      <input type="text" id="name" class="block" autocomplete="off">
    </div>
    <div>
      <label for="age">Age</label>
      <input type="number" id="age" name="age" class="block decoration-0">
    </div>
    <div>
      <label for="course">Course</label>
      <div class="text-black">
        <select id="course" name="course">
          <option value="">Please select a course</option>
          <option value="Maths">Maths</option>
          <option value="History">History</option>
          <option value="Physics">Physics</option>
          <option value="English">English</option>
          <option value="Biology">Biology</option>
        </select>
      </div>
    </div>
    <div>
      <label for="email">Parent's email</label>
      <input type="email" id="email" name="email" class="block" :value="registration.email">
    </div>
    <div>
      <label for="tel">Contact number</label>
      <input type="tel" id="tel" name="tel" class="block">
    </div>
  </div>
</template>

<style scoped>

</style>