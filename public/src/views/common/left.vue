<template>
	<div class="imocco-left-s">
		<div class="imocco-left-first">
			<ul>
				<li v-for="menu in menus">
					<div>{{menu.name}}</div>
				</li>
			</ul>
		</div>
		<div class="{{ !show?'imocco-left-bottom':'imocco-left-bottom-close'}}">
			<i class="glyphicon {{!show?'glyphicon-menu-left':'glyphicon-menu-right'}} imocco-left-i" @click="show=!show"></i>
		</div>	
	</div>
</template>
<script>
	module.exports = {
		props:['show'],
		data(){
			return{
				menus:[{
					name:'订单管理',
					opened:false,
					icon:'',
					child:[{
						name:'订单列表',
						opened:false,
						url:''
					}, {
						name:'添加订单',
						opened:false,
						url:'edit'
					}]
				},
				{
					name:'用户管理',
					opened:false,
					icon:'glyphicon glyphicon-user',
					child:[{
						name:'用户列表',
						opened:false,
						url:''
					}, {
						name:'添加用户',
						opened:false,
						url:''
					}]
				}
				]
			};
		},
		methods:{
		}
	};
</script>
<style type="text/css">
	.imocco-left-i{
		bottom: 10px;
		cursor: pointer;
	}
	.imocco-left-bottom{
		bottom: 10px;
		text-align: center;
		position: absolute;
		width: 200px;
		transition:.5s;
	}
	.imocco-left-bottom-close{
		transition:.5s;
		width: 50px;
		position: absolute;
		bottom: 10px;
		text-align: center;
	}
</style>