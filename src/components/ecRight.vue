<template>
   <div class="_right ml-8 relative ">
      <div class="">
         <h3 class="text-[0.812rem]  lg:text-base uppercase text-orange font-bold tracking-widest">
            Sneaker Company
         </h3>
         <h1 class="pt-3  text-[1.9rem] lg:text-[2.8rem] leading-tight lg:leading-[3rem] font-bold text-very_dark_blue">
            Fall Limited Edition Sneakers
         </h1>
         <p class="text-sm mt-6 mr-6 text-dark_grayish_blue leading-relaxed lg:text-f17 lg:leading-normal lg:pr-7">
            These low-profile sneakers are your perfect casual wear companion. Featuring a 
            durable rubber outer sole, they’ll withstand everything the weather can offer.
         </p>
         <div class="mt-8  flex flex-row justify-between items-center lg:block">
            <div class="flex flex-row items-center">
               <p class="text-[1.9rem] font-bold">$125.00</p>
               <p class="ml-4 px-2 py-1 bg-pale_orange text-orange font-bold rounded-lg">50%</p>
            </div>
            <p class="mr-7 lg:mr-0 text-grayish_blue line-through font-bold">$250.00</p>
         </div>
         <div class="mt-4  mr-6 lg:mt-8 lg:mr-8 lg:flex flex-row">
            <ec-plus-minus></ec-plus-minus>
            <div class="flex flex-row items-center justify-center bg-orange
                   text-white font-bold rounded-xl  btn-shadow
                   mb-4 mt-4 lg:mt-0 lg:mb-0 w-full py-4 lg:ml-4 
                   cursor-pointer lg:hover:opacity-60"
                   @click="store.inCart.c=store.count; store.inCart.t=store.count*125">
               <svg class="mr-2" width="22" height="20"  xmlns="http://www.w3.org/2000/svg"><path d="M20.925 3.641H3.863L3.61.816A.896.896 0 0 0 2.717 0H.897a.896.896 0 1 0 0 1.792h1l1.031 11.483c.073.828.52 1.726 1.291 2.336C2.83 17.385 4.099 20 6.359 20c1.875 0 3.197-1.87 2.554-3.642h4.905c-.642 1.77.677 3.642 2.555 3.642a2.72 2.72 0 0 0 2.717-2.717 2.72 2.72 0 0 0-2.717-2.717H6.365c-.681 0-1.274-.41-1.53-1.009l14.321-.842a.896.896 0 0 0 .817-.677l1.821-7.283a.897.897 0 0 0-.87-1.114ZM6.358 18.208a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm10.015 0a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm2.021-7.243-13.8.81-.57-6.341h15.753l-1.383 5.53Z" fill="#fff" fill-rule="nonzero"/></svg>
               <div class="ml-2 ">
                   Add to cart
               </div>
            </div>
         </div>
      </div>
   </div>
</template>


<script setup>
   import store from '../store.js'
</script>


<style scoped>
   .btn-shadow{
      box-shadow: 0 5px 100px -10px hsl(25, 74%, 62%);
   }
</style>