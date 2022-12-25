<template>
   <div v-if="store.showCart" class="
         absolute z-10 w-[22rem] top-[6rem] lg:top-[6.5rem]  left-3 lg:left-[50rem] xl:left-[60rem] lg:w-[25rem] h-[15rem] bg-white  
         rounded-xl shadow-xl"
      >
      <div>
         <p class="px-6 pt-6 pb-5 text-very_dark_blue font-bold" >Cart</p>
         <hr >
      </div>
      <p v-if="store.inCart.c===0" class="text-very_dark_blue font-bold px-24 lg:px-32 pt-16">Your cart is empty.</p>
      <div v-else >
         <div class="flex flex-row items-center px-4 lg:px-6 pt-6">
            <img :src="p1t" class="w-12 h-12 rounded-md" alt="">
            <div class="pl-2">
               <p class="text-dark_grayish_blue text-sm lg:text-f17">Fall Limited Edition Sneakers</p>
               <p class="text-dark_grayish_blue text-sm lg:text-f17">{{ `$125.00 x ${store.inCart.c} ` }}<span class="font-bold text-f17">{{ `$${store.inCart.t}`}}</span></p>
            </div>
            <div class="pl-10 lg:pl-12">
               <svg @click="resetCart()" class="cursor-pointer" width="14" height="16" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><defs><path d="M0 2.625V1.75C0 1.334.334 1 .75 1h3.5l.294-.584A.741.741 0 0 1 5.213 0h3.571a.75.75 0 0 1 .672.416L9.75 1h3.5c.416 0 .75.334.75.75v.875a.376.376 0 0 1-.375.375H.375A.376.376 0 0 1 0 2.625Zm13 1.75V14.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 1 14.5V4.375C1 4.169 1.169 4 1.375 4h11.25c.206 0 .375.169.375.375ZM4.5 6.5c0-.275-.225-.5-.5-.5s-.5.225-.5.5v7c0 .275.225.5.5.5s.5-.225.5-.5v-7Zm3 0c0-.275-.225-.5-.5-.5s-.5.225-.5.5v7c0 .275.225.5.5.5s.5-.225.5-.5v-7Zm3 0c0-.275-.225-.5-.5-.5s-.5.225-.5.5v7c0 .275.225.5.5.5s.5-.225.5-.5v-7Z" id="a"/></defs><use fill="#C3CAD9" fill-rule="nonzero" xlink:href="#a"/></svg>
            </div>
         </div>
         <button @click="resetCart() "   class="mt-6  ml-3 lg:ml-5 py-3 lg:py-4 px-32 lg:px-36 bg-orange rounded-lg
                      text-white font-bold  hover:opacity-60" >
               Checkout
         </button>
      </div>
   </div>
</template>


<script setup>
   import store from '../store.js'
   import p1t from "../assets/img/image-product-1-thumbnail.jpg"

   const resetCart = () => {
      store.count=0;store.total=0;store.inCart.c=0;store.inCart.t=0
      store.showCart = false
   }
</script>


<style scoped>

</style>