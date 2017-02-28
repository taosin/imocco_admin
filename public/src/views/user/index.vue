<template>
	<div class="user">
		<im-input :option="user"></im-input>{{user.value}}
		<im-input :option="email"></im-input>
	</div>
</template>
<script>
import { imInput } from './../../components/index.js';
export default{
    components:{
        imInput
    },
    data(){
        return{
        	user:{
        		type:'password',
        		required:true,
        		text:'密码不能为空！',
        		value:''
        	},
        	email:{
        		type:'email',
        		required:true,
        		text:'邮箱不能为空！',
        		value:''
        	}
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
<style scoped lang='less'>
	.user{
		padding: 20px;
	}
</style>