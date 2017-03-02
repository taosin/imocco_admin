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
<style type="text/css">
	#wrapper{
		height: 100%;
    color: #818a91;
  }
</style>