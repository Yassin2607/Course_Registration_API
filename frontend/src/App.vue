<template>
  <div class="flex flex-col h-screen overflow-hidden">
    <header-component></header-component>
    <router-view class="grow bg-gray-100"></router-view>
  </div>
</template>

<script>
import HeaderComponent from "@/components/Header.vue";

export default {
  name: 'App',
  components: {HeaderComponent},

}
</script>

<style>

</style>
