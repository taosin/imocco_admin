<template>
	<div class="im-select">
		<input type="text" @click="showLi($event)" class="im-select-input" readonly :placeholder="placeholder" v-model="input">
		<div class="im-select-model" v-show="show" @click.stop="show =false">
			<ul v-show="show" :style="{top: top + 'px', left:left + 'px'}">
				<li v-for="data in datas" @click="choose(data.val, data.label)">{{data.label}}</li>
			</ul>
		</div>
	</div>
</template>
<script>
	import SelectJS from './select.js';
	export default SelectJS;
</script>
<style scoped lang='less'>
	.im-select{
		clear: both;
		width: 200px;
		.im-select-input{
			background-color: #fff;
			border-radius: 4px;
			border: 1px solid #bfcbd9;
			color: #1f2d3d;
			display: block;
			font-size: inherit;
			height: 36px;
			line-height: 1;
			padding: 3px 10px;
			-webkit-transition: border-color 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);
			transition: border-color 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);
			width: 100%;
		}
		.im-select-input:focus{
			outline: none;
		}
		ul{
			background-color: #fff;
			position: absolute;
			list-style: none;
			padding: 0;
			border: 1px solid #ddd;
			margin-top: 3px;
			border-radius: 3px;
			line-height: 30px;
			width: 200px;
			z-index: 9999;
		}
		li{
			padding-left: 15px;
			cursor: pointer;
		}
		li:hover{
			background: #f3f3f3;
		}
		.im-select-model{
			/*background: red;*/
			position: fixed;
			width: 100%;
			height: 100%;
			top: 0;
			left:0;
			right: 0;
			bottom: 0;
			z-index: 9998;
		}
	}
</style>