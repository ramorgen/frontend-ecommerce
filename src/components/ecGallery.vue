<template>
         
         <img 
            @click="store.lbOn=true" 
            class="w-full h-[17rem] lg:h-full object-cover object-top 
                   cursor-pointer lg:rounded-xl col-span-4" 
            :src="store.pics[store.bigPicIndex].p" 
            alt="Big picture"
         >

      
      <ec-thumbnails v-if="store.wWidth>1199"
         :class="store.lbOn ? getClass(index) : '' "
         @click="store.setPic(index)" 
         v-for="(pic,index) in store.pics" 
         :key="index" 
         :pic="pic.t"
         :clicked ="pic.c"
      />
   

</template>


<script setup>
   import store from '../store.js'

   const getClass = (index) => {
      let cl = 'w-2/3 '
      if (index==0){
         cl += 'justify-self-end'
      } else if(index===1 || index===2) {
         cl += 'justify-self-center'
      }

      return cl
   }
</script>


