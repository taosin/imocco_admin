<template>
  <div class="imocco">
    <div class="imocco-header">
      <top></top>
    </div>
    <div class="imocco-main">
      <div class="imocco-left {{closeLeft?'imocco-left-close':''}}" @click="closeLeft=!closeLeft">
      </div>
      <div class="imocco-right {{closeLeft?'imocco-right-open':''}}" @click="closeLeft=!closeLeft">
        <router-view  class="view" keep-alive transition transition-mode="out-in"> 
        </router-view>
      </div>
    </div>
  </div>
</template>
<script>
  import './../../static/css/index.scss';
  import top from './header.vue';
  export default {
    components: {
      top
    },
    vuex: {
      getters: {
      },
      actions: {
      }
    },
    attached(){
    },  
    data(){
      return{
        closeLeft:false
      };
    },
    route:{
      data(transition){
      }
    },
    methods:{
    }
  };
</script>

