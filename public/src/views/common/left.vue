<template>
	<div class="imocco-left-s">
		<div class="imocco-left-first">
			<ul class="imocco-left-first-ul">
				<li v-for="menu in menus" class="imocco-left-first-ul-li" @click="sel(menu.opened, $index, $event)">
					<i :class="menu.icon" class="imocco-left-icon-left"></i>
					<span v-show="!show" class="imocco-left-first-ul-li-span">{{menu.name}}</span>
					<i class="glyphicon {{ menu.opened?'glyphicon-menu-up':'glyphicon-menu-down'}} imocco-left-icon" v-show="!show"></i>
				</li>
			</ul>
			<ul class="imocco-left-first-ul-li-ul" v-if="menus[selIndex].child" v-show="menus[selIndex].opened && !show" >
				<li class="imocco-left-first-ul-li-ul-li" v-for="child in menus[selIndex].child">
					<span class="imocco-left-first-ul-li-ul-li-span">{{child.name}}</span>
				</li>
			</ul>
		</div>
		<div class="{{ !show?'imocco-left-bottom':'imocco-left-bottom-close'}}">
			<i class="glyphicon {{!show?'glyphicon-menu-left':'glyphicon-menu-right'}} imocco-left-i" @click="show=!show"></i>
		</div>	
	</div>
</template>
<script>
	import './../../../static/css/left.scss';
	module.exports = {
		props:['show'],
		data(){
			return{
				selIndex:0,
				menus:[{
					name:'订单管理',
					opened:false,
					icon:'glyphicon glyphicon-user',
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
			sel(opened, index, event){
				this.menus[index].opened = !this.menus[index].opened;
				this.selIndex = index;
				console.info(event.target.offsetTop);
			}

		}
	};
</script>