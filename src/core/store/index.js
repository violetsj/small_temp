// https://vuex.vuejs.org/zh-cn/intro.html
// make sure to call Vue.use(Vuex) if using a module system
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    cartList:[]
  },
  mutations: {
    add: (state,data) => {
      // console.log(data)
      var bool=true;
      if(state.cartList.length!=0){
        state.cartList.forEach(ele => {
          if(ele.id==data.id){
            ele.num++;
            bool=false
          }
          
        });
      }

      if(bool){
        data.num=1;
        state.cartList.push(data)
      }
      
    },
    del:(state,data)=>{
      var bool=true;
      if(state.cartList.length!=0){
        state.cartList.forEach((ele,index) => {
          if(ele.id==data.id){
            ele.num--;
            if(ele.num==0){
              state.cartList.splice(index,1)
            }
            bool=false
          }
        });
      }
    //  console.log(state.cartList)
    }
   
  }
})

export default store
