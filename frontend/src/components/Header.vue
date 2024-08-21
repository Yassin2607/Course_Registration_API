<script>
export default {
  name: "HeaderComponent"
}
</script>

<template>
  <div class="flex justify-center bg-red-600 text-white">
    <div class="flex flex-col items-center m-4 space-y-5">
      <div>
        <h1 class="drop-shadow-[5px_5px_0_rgba(0,0,0,0.25)] font-bold text-nowrap sm:text-4xl text-2xl">Course Registration System</h1>
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