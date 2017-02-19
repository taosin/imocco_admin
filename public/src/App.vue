<template>
  <div id="wrapper">
    <router-view class="view" keep-alive transition transition-mode="out-in"> </router-view>
  </div>
</template>
<script>
  import store from './vuex/store';
  export default {
    store
  };
</script>