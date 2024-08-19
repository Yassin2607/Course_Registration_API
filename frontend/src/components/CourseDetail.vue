<script>

import {Registration} from "@/helpers/Registration";

export default {
  name: "CourseDetail",
  props: {
    selectedRegistration: {
      type: Object,
      required: true
    }
  },
  data(){
    return {
      editedRegistration: Registration.createEmptyRegistration(),
    }
  },
  created() {
    if (this.selectedRegistration){
      this.editedRegistration = Registration.copyConstructor(this.selectedRegistration);
    }
  },
  watch: {
    selectedRegistration(){
      if (this.selectedRegistration){
        this.editedRegistration = Registration.copyConstructor(this.selectedRegistration);
      }
    }
  },
  methods:{
    onDelete() {
      if (this.selectedRegistration) {
        this.$emit('delete-registration', this.selectedRegistration);
        console.log("Deleted")
      }
    },
    onSave() {
      if (this.selectedRegistration) {
        this.$emit('update-registration', this.editedRegistration);
        console.log("Saved")
      }
    },
    onReset() {
      if (this.editedRegistration && this.selectedRegistration) {
        this.editedRegistration = Registration.copyConstructor(this.selectedRegistration);
        console.log("Reset")
      }
    },
    onCancelScooter() {
      this.$router.push((this.$route.matched[0]).path);
    },
  }
}
</script>

<template>
  <div class="flex flex-col justify-between border-2 border-gray-200 p-3">
    <div class="flex flex-row justify-between">
      <div>
        <h1 class="font-bold text-2xl">Student Details ({{editedRegistration.id}})</h1>
      </div>
      <div class="flex flex-col sm:flex-row text-white">
        <a @click="onSave" class="bg-green-700 rounded-lg p-2 ml-2 text-center hover:bg-green-800 hover:cursor-pointer">Save</a>
        <a @click="onReset" class="bg-gray-400 rounded-lg p-2 ml-2 text-center hover:bg-gray-500 hover:cursor-pointer">Reset changes</a>
        <a @click="onDelete" class="bg-red-800 rounded-lg p-2 ml-2 text-center hover:bg-red-900 hover:cursor-pointer">Delete</a>
      </div>
    </div>
    <div>
      <label for="name">Child's name</label>
      <input type="text" id="name" class="block" autocomplete="off" v-model="editedRegistration.childName">
    </div>
    <div>
      <label for="age">Age</label>
      <input type="number" id="age" name="age" class="block decoration-0" v-model="editedRegistration.age">
    </div>
    <div>
      <label for="course">Course</label>
      <div class="text-black">
        <select id="course" name="course" :value="editedRegistration.course" v-model="editedRegistration.course">
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
      <input type="email" id="email" name="email" class="block" v-model="editedRegistration.email">
    </div>
    <div>
      <label for="tel">Contact number</label>
      <input type="tel" id="tel" name="tel" class="block" v-model="editedRegistration.tel">
    </div>
  </div>
</template>

<style scoped>
input, select{
  color: black;
  padding: 0.5rem;
  font-size: 1rem;
  border-radius: 0.25rem;
  width: 100%;
}
</style>