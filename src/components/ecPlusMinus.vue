<template>
   <div class="lg:w-[60%] grid grid-cols-3 items-center bg-light_grayish_blue rounded-lg ">
      <div @click="(store.inCart.count>0 ? store.count-- : store.count=0) " class="pl-4 cursor-pointer  text-orange font-bold text-[2.2rem]">-</div>
      <div class="justify-self-center font-bold text-f18 ">{{ store.count }}</div>
      <div @click="store.count++" class="justify-self-end pr-4 cursor-pointer  text-orange font-bold text-[2.2rem]">+</div>
   </div>
</template>


<script setup>
   import store from '../store.js'


</script>


<style scoped>

</style>