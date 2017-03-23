<template>
    <div class="user">
    </div>
</template>
<script>
    import { imInput, imTable, imPagination, imSelect } from './../../components/index.js';
    export default{
        components:{
            imInput,
            imTable,
            imPagination,
            imSelect
        },
        data(){
            return{
                start:0,
                limit:15,
                total:1000,
                currentpage:1,
                pagesize:10,
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
              },
              datas:[],
              items:[
              { val:'1', label:'篮球' },
              { val:'2', label:'足球' },
              { val:'3', label:'冰球' },
              { val:'4', label:'棒球' }
              ],
              placeholder:'请选择'
          };
      },
      watch:{
      },
      attached(){
        this.initData(0);
    },
    methods:{
        initData(start){
            const data = {};
            data.start = this.start;
            data.limit = this.limit;
            Vue.http.get('/articles', data).then((result) => {
                this.datas = result.data.data;
            });
            Vue.http.get('/articlesCount', data).then((result) => {
                this.total = result.data.data;
            });
        }
    }
};
</script>
<style scoped lang='less'>
    .user{
        padding: 20px;
    }
</style>