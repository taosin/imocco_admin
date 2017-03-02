<template>
	<div>
		<div class="paginations" >
			<span>共{{totalRows}}条记录/每页{{perPage}}记录</span>
			<button type="button" class="btn btn-pagination-up" v-bind:disabled="currentPage == 1 " v-on:click.prevent="currentPage = 1"><span aria-hidden="true">首页</span></button>
			<button type="button" class="btn btn-pagination-up" v-bind:disabled="currentPage == 1 " v-on:click.prevent="(currentPage == 1) ? return : currentPage--"><span aria-hidden="true">上一页</span></button>
			<button type="button" class="btn  btn-pagination {{ currentPage == 1 ?  'active' : '' }}" v-on:click.prevent="currentPage = 1" v-show="showPrev">1</button>
			<span class="btn btn-pagination" v-show="showPrev">...</span>
			<button type="button"
			class="btn btn-pagination {{ $index + diff == currentPage ? 'active' : '' }}"
			v-for="item in pageLinks"
			v-on:click.prevent="currentPage = $index + diff">{{$index + diff}}
		</button>
		<span class="btn btn-pagination" v-show="showNext">...</span>
		<button type="button" class="btn btn-pagination {{ numberOfPages == currentPage ? 'active' : '' }}" v-show="showNext" v-on:click.prevent="currentPage = numberOfPages">{{numberOfPages}}</button>
		<button type="button" class="btn btn-pagination-up" v-bind:disabled="currentPage == numberOfPages" v-on:click.prevent="(currentPage == numberOfPages) ? return : currentPage++"><span aria-hidden="true">下一页</span></button>
		<button type="button" class="btn btn-pagination-up" v-bind:disabled="currentPage == numberOfPages" v-on:click.prevent="currentPage =numberOfPages"><span aria-hidden="true">末页</span></button>
	</div>
</template>
<script>
	import paginationJs from './pagination.js';
	export default paginationJs;
</script>
<style scoped lang='less'>
	.btn-pagination-up,
	.btn-pagination {
		background: #ffffff;
		border: 1px solid #979797;
		border-radius: 0;
		margin: 0 -1px;
		transition: 0.8s;
	}
	.btn-pagination.active{
		background: #324057;
		color: #fff;
	}
	button.btn.btn-pagination-up,
	button.btn.btn-pagination.active,
	button.btn.btn-pagination{
		outline: none;
	}
	.paginations {
		margin: 20px 0;
		float: right;
	}
</style>