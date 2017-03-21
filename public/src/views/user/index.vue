<template>
    <div class="user">
        <im-input :option="user"></im-input>{{user.value}}
        <im-input :option="email"></im-input>
        <im-select :datas="items" :placeholder="placeholder"></im-select>
        <!-- <im-table :data="datas" :columns="columns" ></im-table> -->
        <im-pagination size="md" variant="primary" :total-rows="total" :current-page.sync="currentpage" :per-page="pagesize"></im-pagination>
        <im-select :datas="items" :placeholder="placeholder"></im-select>
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
              datas:[
              { userName:'上海南情话美搭酒店', userName2:'南京路店', userName3:'2', userName4:'320', userName5:'1', userName6:'56', userName7:new Date(), userName8:'上海南情话美搭酒店', freezeRegion:'上海', freezeRegion2:'上海', freezeRegion3:'长宁', op2:'协和路1033号文洋大厦', op3:'协和路1033号文洋大厦', },
              { userName:'上海南情话美搭酒店', userName2:'南京路店', userName3:'2', userName4:'320', userName5:'1', userName6:'56', userName7:new Date(), userName8:'上海南情话美搭酒店', freezeRegion:'上海', freezeRegion2:'上海', freezeRegion3:'长宁', op2:'协和路1033号文洋大厦', op3:'协和路1033号文洋大厦', },
              { userName:'上海南情话美搭酒店', userName2:'南京路店', userName3:'2', userName4:'320', userName5:'1', userName6:'56', userName7:new Date(), userName8:'上海南情话美搭酒店', freezeRegion:'上海', freezeRegion2:'上海', freezeRegion3:'长宁', op2:'协和路1033号文洋大厦', op3:'协和路1033号文洋大厦', }
              ],
              columns: {
                  userName:{
                    text:'订单号',
                    render: (value, data, index) => value,
                },
                userName2:{
                    text:'酒店名称',
                    render: (value, data, index) => value,
                },
                userName3:{
                    text:'分店名',
                    render: (value, data, index) => value,
                },
                userName4:{
                    text:'房型',
                    render: (value, data, index) => value,
                },
                userName5:{
                    text:'入住日',
                    render: (value, data, index) => value,
                },
                userName6:{
                    text:'离店日',
                    render: (value, data, index) => value,
                },
                userName7:{
                    text:'入住天数',
                    render: (value, data, index) => this.$formatDate(value, 'yyyy-MM-dd hh:mm'),
                },
                freezeRegion: {
                    text: '房间数',
                    render: (value, data, index) => value,
                },
                freezeRegion2: {
                    text: '入住姓名',
                    render: (value, data, index) => value,
                },
                freezeRegion3: {
                    text: '手机号',
                    render: (value, data, index) => value,
                },
                op2:{
                    text: '手机号',
                    render: (value, data, index) => value,
                },
                op3:{
                    text: '手机号',
                    render: (value, data, index) => value,
                },
            },
            items:[
            { val:'1', label:'篮球' },
            { val:'2', label:'足球' },
            { val:'3', label:'冰球' },
            { val:'4', label:'棒球' }
            ],
            placeholder:'请选择'
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