<template>
	<div class="imocco-left-s">
		<div class="imocco-left-first">
			<ul class="imocco-left-first-ul">
				<li v-for="menu in menus" class="imocco-left-first-ul-li" @click="sel(menu.opened, $index, $event)" :style="{ height: ( menu.opened ? height: 50 ) + 'px' }">
					<i :class="menu.icon" class="imocco-left-icon-left"></i>
					<span v-show="!show" class="imocco-left-first-ul-li-span">{{menu.name}}</span>
					<i class="glyphicon {{ menu.opened?'glyphicon-menu-up':'glyphicon-menu-down'}} imocco-left-icon" v-show="!show"></i>
				</li>
			</ul>
			<ul class="imocco-left-first-ul-li-ul" v-if="menus[selIndex].child" v-show="menus[selIndex].opened && !show" :style="{ top: sHeight + 'px' }">
				<li class="imocco-left-first-ul-li-ul-li" v-for="child in menus[selIndex].child" @click="goto(child.url)">
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
	import { getLeftMenus } from './../../service/left.js';
	module.exports = {
		props:['show'],
		data(){
			return{
				selIndex:0,
				menus:[{
					name:'订单管理',
					opened:true,
					icon:'glyphicon glyphicon-user',
					child:[{
						name:'订单列表',
						url:'/user/list'
					}, {
						name:'添加订单',
						url:'/order/list'
					}]
				},
				{
					name:'用户管理',
					opened:false,
					icon:'glyphicon glyphicon-user',
					child:[{
						name:'用户列表',
						url:''
					}, {
						name:'用户列表',
						url:''
					}, {
						name:'添加用户',
						url:''
					}]
				},
				{
					name:'文章管理',
					opened:false,
					icon:'glyphicon glyphicon-user',
					child:[{
						name:'文章列表',
						url:''
					}, {
						name:'发布文章',
						url:''
					}]
				}
				],
				height:50,
				sHeight:50
			};
		},
		watch:{
			show(val){
				if(val){
					for (let i = 0; i < this.menus.length; i++) {
						this.menus[i].opened = false;
					}
				}
			}
		},
		vuex:{
			getters:{
				result: state => state.leftmenus
			}
		},
		methods:{
			sel(opened, index, event){
				for (let i = 0; i < this.menus.length; i++) {
					this.menus[i].opened = false;
					// this.height = 50;
				}
				this.menus[index].opened = !opened;
				this.selIndex = index;
				console.info(event.target.offsetTop);
				if(this.menus[index].opened){
					this.height = this.menus[index].child.length * 45 + 50;
					this.sHeight = (index + 1) * 50;
				}else{
					this.height = 50;
					this.sHeight = 50;
				}
			},
			goto(url){
				window.router.go(url);
			}

		},
		attached(){
			this.height = this.menus[this.selIndex].child.length * 45 + 50;
			this.sHeight = (this.selIndex + 1) * 50;
		}
	};
</script>