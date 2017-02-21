<template>
	<div class="imocco-header-in">
		<img :src="logo" class="imocco-header-in-logo">
		<span>管理后台</span>
		<span style="right:250px">{{time}}</span>
	</div>
</template>
<script>
	import './../../../static/css/header.scss';
	export default{
		components:{
		},
		data(){
			return{
				logo:'http://blog.xinsay.cn/luffy.jpg',
				time:''
			};
		},
		attached(){
			this.time = '今天是'+this.$formatDate(new Date(), 'yyyy年MM月dd日');
		}
	};
</script>
