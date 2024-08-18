<script>
export default {
  name: "RegisterComponent"
}
</script>

<template>
  <div class="flex flex-col h-full items-center justify-evenly">
    <div class="flex flex-col space-y-8 bg-red-600 p-7 text-white font-semibold rounded-xl shadow-2xl">
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
    <div>
      <button type="submit" class="bg-red-800 text-white px-6 py-2 text-xl rounded-xl hover:bg-red-900">Submit</button>
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