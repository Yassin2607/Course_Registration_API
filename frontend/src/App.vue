<template>
  <header-component></header-component>
  <router-view></router-view>
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
