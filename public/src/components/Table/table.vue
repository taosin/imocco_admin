<template>
	<div class="im-table">
		<table class="table imtable table-hover" id="table">
			<thead>
				<th v-for="key in columnsname" class="thead_th" :style="{width:columnswidth[key]}">{{key}}</th>
			</thead>
			<tbody >
				<tr v-for="record in newData" @click="rowClick($index)" id="tr_{{$index}}" v-if="data.length>0">
					<td class="grid_td" v-for="key in columnskey" v-gridcell="record[key]">
					</td>
				</tr>
				<tr v-if="data.length===0">
					<td colspan="100%"><h4>暂无数据</h4></td>
				</tr>
			</tbody>
		</table>
	</div>
</template>
<script>
	import TableJs from './table.js';
	export default TableJs;
</script>
<style scoped lang='less'>
	.im-table{
		overflow: hidden;
		width: 100%;
		max-width: 100%;
		background-color: #fff;
		border: 1px solid #dfe6ec;
		font-size: 14px;
		color: #1f2d3d;
		overflow-x: auto;

		.imtable thead th{
			border-bottom: 1px solid #dfe6ec;
			white-space: nowrap;
			overflow: hidden;
			background-color: #eef1f6;
			text-align: left;
			border-right: 1px solid #dfe6ec;

		}
		.imtable thead th:last-child{
			border-right:none;
		}
		.imtable tbody tr{
			border-bottom: 1px solid #dfe6ec;
		}
		.imtable tbody tr td{
			white-space: nowrap;
			text-align: left !important;
			overflow: hidden;
			border-right: 1px solid #dfe6ec;
		}
		.imtable tbody tr:last-child{
			border-bottom: none;
		}
		.imtable tbody tr td:last-child{
			border-right: none;
		}
	}
	.table{
		margin-bottom: 0px;
	}
</style>