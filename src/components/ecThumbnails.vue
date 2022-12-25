<template>
   <div :class="clicked ? 'border-2 border-orange rounded-xl' : ''">
      <img  
         class="cursor-pointer rounded-xl hover:opacity-60" 
         :class="clicked ? 'opacity-30':''" 
         :src="pic" 
         alt="Thumbnail"
      >
   </div>
</template>


<script setup>
   const props = defineProps(['pic','clicked','index'])
</script>
