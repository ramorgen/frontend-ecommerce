<template>
  
   <main >
      <section class="_main w-full relative">
         <ec-nav />
         <ec-cart />
         <ec-left />
         <ec-right />
      </section> 
      <ec-lightbox v-if="store.lbOn"  />
   </main>
</template>

<script setup>
   import {useWindowResize} from '../../use/hooks.js' 
   import store from "./store.js"

   const { width, height } = useWindowResize(); 
   store.wWidth=width  
   store.wHeight=height 
  
</script>


<style>
   #app {
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
   }
   body:not(.tab-user) button:focus,
   body:not(.tab-user) input:focus,
   body:not(.tab-user) select:focus,
   body:not(.tab-user) textarea:focus {
      outline: none;
   }
   @media (min-width:1200px){
      ._main{
      display: grid;
      grid-template-columns:5rem 4rem 1fr 1fr 5rem 5rem;
      grid-template-areas:
      '. h h h h .'
      '. . l r . .';
      
      
   }


   ._head{
      grid-area: h;
      border-bottom: 1px solid rgba(0, 0, 0, .2);
     
   
   }
   ._left {
      grid-area: l;
      align-self: center;
      /* border: 5px solid blue; */
   }

   ._right {
      grid-area: r;
      align-self: center;
      /* border: 5px solid brown; */
   }

 
   }
</style>
