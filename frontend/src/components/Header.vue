<script>
export default {
  name: "HeaderComponent"
}
</script>

<template>
  <div class="flex justify-center bg-red-600 text-white h-1/5">
    <div class="flex flex-col items-center m-4">
      <div>
        <h1 class="font-bold text-nowrap sm:text-4xl text-2xl drop-shadow-2xl">Course Registration System</h1>
      </div>
      <div>
        <p class="text-center mt-2 mb-0.5">I am a</p>
      </div>
      <div class="flex justify-center">
        <router-link to="/" class="bg-red-800 w-24 rounded-xl p-2 mr-2 text-center hover:bg-red-900 border-2 border-red-800 menuItem-active-link">
          Parent
        </router-link>
        <router-link to="/courses" class="bg-red-800 w-24 rounded-xl p-2 ml-2 text-center hover:bg-red-900 border-2 border-red-800 menuItem-active-link">
          Organiser
        </router-link>
      </div>
    </div>
  </div>
</template>

<style scoped>
.menuItem-active-link{
  border: solid 2px #991b1b;
}

.router-link-exact-active.menuItem-active-link{
  border: solid 2px #fca5a5;
}
</style>