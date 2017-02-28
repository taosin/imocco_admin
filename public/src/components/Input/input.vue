<template>
	<div class="im-input">
		<input :type="type" class="input-vali {{ required ?'required-input':''}}" @blur="validate" v-model="option.value">
		<label v-if="required">{{msg}}</label>
	</div>
</template>
<script>
	import InputJs from './input.js';
	export default InputJs;
</script>
<style scoped lang='less'>
	.im-input{
		height: 60px;
		.input-vali{
			background-color: #fff;
			border-radius: 4px;
			border: 1px solid #bfcbd9;
			color: #1f2d3d;
			display: block;
			font-size: inherit;
			height: 36px;
			line-height: 1;
			padding: 3px 10px;
			transition: border-color .2s cubic-bezier(.645,.045,.355,1);
			width: 100%;
		}
		.input-vali:focus {
			outline: 0;
			border-color: #20a0ff;
		}
		.required-input{
			border: 1px solid red;
		}
		label{
			color: #ff4949;
			font-size: 12px;
			line-height: 1;
			padding-top: 4px;
		}
	}
</style>