<script>
export default {
  name: "CourseDetail"
}
</script>

<template>
  <div class="flex flex-col justify-between border-2 border-gray-200 p-3">
    <div class="flex flex-row justify-between">
      <div>
        <h1 class="font-bold text-2xl">Student Details</h1>
      </div>
      <div class="flex flex-col sm:flex-row text-white">
        <a class="bg-green-700 rounded-lg p-2 ml-2 text-center hover:bg-green-800 hover:cursor-pointer">Save</a>
        <a class="bg-red-800 rounded-lg p-2 ml-2 text-center hover:bg-red-900 hover:cursor-pointer">Delete</a>
      </div>
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
          <option>United States</option>
          <option>Canada</option>
          <option>Mexico</option>
        </select>
      </div>
    </div>
    <div>
      <label for="email">Parent's email</label>
      <input type="email" id="email" name="email" class="block">
    </div>
    <div>
      <label for="tel">Contact number</label>
      <input type="tel" id="tel" name="tel" class="block">
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