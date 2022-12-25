<template>
   <div class="lg:absolute lg:inset-0 lg:grid lg:place-items-center " style="background: rgb(0,0,0,.6);">
      
         
      <div class="h relative lg:w-[40rem] lg:grid lg:grid-cols-4  lg:gap-6">
         <div class="hidden lg:block scale-150 stroke-white fill-white col-end-5 justify-self-end ">
            <svg @click="store.lbOn=false" class="cursor-pointer" width="14" height="15" xmlns="http://www.w3.org/2000/svg">
               <path d="m11.596.782 2.122 2.122L9.12 7.499l4.597 4.597-2.122 2.122L7 9.62l-4.595 4.597-2.122-2.122L4.878 7.5.282 2.904 2.404.782l4.595 4.596L11.596.782Z"  fill-rule="evenodd"/>
            </svg>
         </div>


         <div @click="prev()" class="absolute cursor-pointer left-4 w-8 h-8 top-[7.5rem]
                           lg:left-[-1.5rem] lg:top-[42%] lg:w-14 lg:h-14 
                           rounded-full grid place-items-center bg-white ">
            <svg width="12" height="18" xmlns="http://www.w3.org/2000/svg"><path d="M11 1 3 9l8 8" stroke="#1D2026" stroke-width="3" fill="none" fill-rule="evenodd"/></svg>
         </div>
         <div @click="next()" class="absolute cursor-pointer w-8 h-8 top-[7.5rem] right-4
                        lg:right-[-1.5rem] lg:top-[42%] lg:w-14 lg:h-14 
                        rounded-full grid place-items-center bg-white ">
            <svg width="13" height="18" xmlns="http://www.w3.org/2000/svg"><path d="m2 1 8 8-8 8" stroke="#1D2026" stroke-width="3" fill="none" fill-rule="evenodd"/></svg>
         </div>
         <ec-gallery />
      </div>
   </div>
</template>


<script setup>
   import store from '../store.js'

   const prev = () => {
      store.setPic((store.bigPicIndex > 0 ? store.bigPicIndex-1 : 3))
   }
   const next = () => {
      store.setPic((store.bigPicIndex == 3 ? 0 : store.bigPicIndex+1 ))
   }
</script>


<style scoped>

</style>