<script>
import axios from "axios";

export default {
  name: "RegisterComponent",
  data() {
    return {
      name: "",
      age: "",
      course: "",
      email: "",
      tel: ""
    };
  },
  methods: {
    validateInput() {
      if (
          this.name === "" ||
          this.age === "" ||
          this.course === "" ||
          this.email === "" ||
          this.tel === ""
      ) {
        alert("Please fill in all fields");
      } else {
        this.submitForm();
      }
    },
    async submitForm() {
      try {
        const payload = {
          name: this.name,
          age: this.age,
          course: this.course,
          email: this.email,
          tel: this.tel
        };

        const response = await axios.post('http://localhost:3000/api/registrations/', payload);

        if (response.status === 201) {
          alert("Registration successful");
          // Optionally clear the form
          this.resetForm();
        }
      } catch (error) {
        console.error("There was an error creating the registration:", error);
        alert("There was an error creating the registration");
      }

    },
    resetForm() {
      this.name = "";
      this.age = "";
      this.course = "";
      this.email = "";
      this.tel = "";
    }

  }
};
</script>

<template>
  <div class="flex flex-col h-full items-center justify-evenly">
    <div class="flex flex-col space-y-8 bg-red-600 p-7 text-white font-semibold rounded-xl shadow-2xl">
      <div>
        <label for="name">Child's name</label>
        <input v-model="name" type="text" id="name" class="block" autocomplete="off">
      </div>
      <div>
        <label for="age">Age</label>
        <input v-model.number="age" type="number" id="age" name="age" class="block decoration-0" autocomplete="off">
      </div>
      <div>
        <label for="course">Course</label>
        <div class="text-black">
          <select v-model="course" id="course" name="course">
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
        <input v-model="email" type="email" id="email" name="email" class="block" autocomplete="off">
      </div>
      <div>
        <label for="tel">Contact number</label>
        <input v-model="tel" type="tel" id="tel" name="tel" class="block" autocomplete="off">
      </div>
    </div>
    <div>
      <button type="submit" @click="validateInput()" class="bg-red-800 text-white px-6 py-2 text-xl rounded-xl hover:bg-red-900">Submit</button>
    </div>
  </div>
</template>

<style scoped>
input, select {
  color: black;
  padding: 0.5rem;
  font-size: 1rem;
  border-radius: 0.25rem;
}

input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

/* Firefox */
input[type=number] {
  -moz-appearance: textfield;
}
</style>
