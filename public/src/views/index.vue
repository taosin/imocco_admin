<template>
  <div class="imocco">
    <div class="imocco-header">
      <top></top>
    </div>
    <div class="imocco-main">
      <div class="imocco-left {{close?'imocco-left-close':''}}">
      <left :show.sync='close'></left>
      </div>
      <div class="imocco-right {{close?'imocco-right-open':''}}">
        <router-view  class="view" keep-alive transition transition-mode="out-in"> 
        </router-view>
      </div>
    </div>
  </div>
</template>
<script>
  import './../../static/css/index.scss';
  import top from './common/header.vue';
  import left from './common/left.vue';
  export default {
    components: {
      top,
      left
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
        close:false
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

