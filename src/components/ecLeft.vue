<template>
    <div v-if="store.wWidth < 1200" >
      <ec-lightbox />
   </div>
   <div v-else class="_left mt-24 ml-10 w-9/12 grid grid-cols-4 gap-6">
      <ec-gallery />
   </div>
   
</template>


<script setup>
   import store from '../store.js'
</script>


<style scoped>

</style>