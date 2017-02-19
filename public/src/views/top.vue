<template>
	<div class="top">
		<div class="main {{kaId || shopId ? 'sss-main':''}}">
      <ul v-if="loginType === '1' ">
               <!--  <li v-if="kaId || shopId">未到账(净额):{{noAccount?noAccount/100:0}}</li>
                <li v-if="kaId || shopId">待结算(净额):{{hasPayTotal?hasPayTotal/100:0}}</li>
                <li v-if="kaId || shopId">待结算金额:{{depositTotal?depositTotal/100:0}}</li>
                <li v-if="kaId || shopId">已结算(净额):{{noPayTotal?noPayTotal/100:0}}</li>
                <li v-if="kaId || shopId">已结算金额:{{noDepositTotal?noDepositTotal/100:0}}</li> -->
                <li><a>{{userId +'('+role+')'}}</a></li>
                <li @click="logout"><a>退出</a></li>
                <!-- <li class="admin">
                    <a>admin</a>
                    <ul class="admin-ul">
                        <li><a>管理账号</a></li>
                        <li><a>修改密码</a></li>
                        <li><a>修改资料</a></li>
                        <li><a @click="logout">退出</a></li>
                    </ul>
                  </li> -->
                </ul>
                <ul v-if="loginType === '2' ">
                  <li v-if="kaId || shopId">未到账(净额):{{noAccount?noAccount/100:0}}</li>
                  <li v-if="kaId || shopId">待结算(净额):{{hasPayTotal?hasPayTotal/100:0}}</li>
                  <li v-if="kaId || shopId">待结算金额:{{depositTotal?depositTotal/100:0}}</li>
                  <li v-if="kaId || shopId">已结算(净额):{{noPayTotal?noPayTotal/100:0}}</li>
                  <li v-if="kaId || shopId">已结算金额:{{noDepositTotal?noDepositTotal/100:0}}</li>
                  <li><a>{{topTitle}}</a></li>
                  <li @click="logout"><a>退出</a></li>
                </ul>
                <ul v-if="loginType === '3' ">
                  <li v-if="kaId || shopId">未到账(净额):{{shopnoAccount?shopnoAccount/100:0}}</li>
                  <li v-if="kaId || shopId">待结算(净额):{{shophasPayTotal?shophasPayTotal/100:0}}</li>
                  <li v-if="kaId || shopId">待结算金额:{{shopdepositTotal?shopdepositTotal/100:0}}</li>
                  <li v-if="kaId || shopId">已结算(净额):{{shopnoPayTotal?shopnoPayTotal/100:0}}</li>
                  <li v-if="kaId || shopId">已结算金额:{{shopnoDepositTotal?shopnoDepositTotal/100:0}}</li>
                  <li><a>{{topTitle}}</a></li>                
                  <li @click="logout"><a>退出</a></li>
                  
                </ul>
              </div>
            </div>
          </template>
          <script>
           import './../../static/css/top.scss';
           export default{
            components:{
        // *
      },
      data(){
       return{
        loginType:'1',
        userType:'1',
        kaId:'',
        noAccount:0,
        hasPayTotal:0,
        depositTotal:0,
        noPayTotal:0,
        noDepositTotal:0,
        shopnoAccount:0,
        shophasPayTotal:0,
        shopdepositTotal:0,
        shopnoPayTotal:0,
        shopnoDepositTotal:0,
        shopId:'',
        balance:0,
        userId:'',
        role:'',
        kaName:'',
        topTitle:''
      };
    },
    attached(){
      this.initData();
    },
    computed:{
    },
    methods:{
     logout(){
      this.$h5remove('user_type-');
      this.$h5remove('user_id-ka');
      this.$h5remove('user_id-shop');
      this.$h5remove('_login-type_');
      this.$h5remove('_shop-Name_');
      this.$h5remove('login-ka_name');
      this.$h5remove('login-shop_name');
      this.$h5remove('_role_');
      window.router.go('/login');
    },
    initData(){
      const data = {};
      this.shopId = this.$h5getValue('user_id-shop');
      this.kaId = this.$h5getValue('user_id-ka');
      this.loginType = this.$h5getValue('_login-type_');
      this.userId = this.$h5getValue('user_id');
      this.role = this.$h5getValue('_role_');
      const self = this;
      if(self.kaId && self.loginType === '2'){
        data.kaId = self.kaId;
        Vue.http.get('/kaShop/getBalance', data).then((result) => {
          self.noAccount = result.data.data.noAccountStatistical;
          self.hasPayTotal = result.data.data.hasPayTotal;
          self.depositTotal = result.data.data.depositTotal;
          self.noPayTotal = result.data.data.noPayTotal;
          self.noDepositTotal = result.data.data.noDepositTotal;
          self.topTitle = result.data.data.kaName +'('+ self.role +')';
        });
      }
      if(self.shopId && self.loginType === '3'){
        data.shopId = self.shopId;
        Vue.http.get('/kaShop/getBalance', data).then((result) => {
          self.shopnoAccount = result.data.code.noAccountStatistical;
          self.shophasPayTotal = result.data.code.shopNoAccount;
          self.shopdepositTotal = result.data.code.shopNoAccountNeed;
          self.shopnoPayTotal = result.data.code.shopAccountNeed;
          self.shopnoDepositTotal = result.data.code.shopAccount;
          self.topTitle = result.data.code.shopName +'('+ self.role +')';
        });
      }
    }
  }
};
</script>