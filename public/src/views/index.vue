<template>
  <div class="imocco">
    <div class="imocco-header">

    </div>
    <div class="imocco-main">
      <div class="imocco-left">

      </div>
      <div class="imocco-right">
        <router-view  class="view" keep-alive transition transition-mode="out-in"> 
        </router-view>
      </div>
    </div>
  </div>
</template>
<script>
  import './../../static/css/index.scss';
  export default {
    components: {
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

