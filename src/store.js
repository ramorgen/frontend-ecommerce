import { reactive } from "vue";

import p1 from "./assets/img/image-product-1.jpg"
import p1t from "./assets/img/image-product-1-thumbnail.jpg"
import p2 from "./assets/img/image-product-2.jpg"
import p2t from "./assets/img/image-product-2-thumbnail.jpg"
import p3 from "./assets/img/image-product-3.jpg"
import p3t from "./assets/img/image-product-3-thumbnail.jpg"
import p4 from "./assets/img/image-product-4.jpg"
import p4t from "./assets/img/image-product-4-thumbnail.jpg"


const  store = reactive({
   version: "1.0.00",
   wWidth:0,
   wHeight:0,
   count:0,
   total:0,
   inCart:{c:0,t:0},
   showCart:false,
   pics:[{p:p1,t:p1t,c:true},{p:p2,t:p2t,c:false},{p:p3,t:p3t,c:false},{p:p4,t:p4t,c:false}],
   bigPicIndex:0,
   lbOn: false,


   setPic : (index) => {
      store.bigPicIndex=index
     
      store.pics.forEach((el,idx) => {
         el.c = idx===index ? true : false 
      })
   }
})

export default store

