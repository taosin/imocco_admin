<template>
	<div class="imocco-header-in">
		<img :src="logo" class="imocco-header-in-logo">
		<span>管理后台</span>
	</div>
</template>
<script>
	import './../../static/css/header.scss';
	export default{
		components:{
		},
		data(){
			return{
				logo:'http://blog.xinsay.cn/luffy.jpg'
			};
		},
		ready(){
		},
		watch:{
		},
		computed:{
		},
		methods:{
		}
	};
</script>
