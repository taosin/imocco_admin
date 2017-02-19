<template>
  <div>
    <leftlayout>
      <div slot="left_menu" class="left_menu" >
        <div class="top">
          <!-- <a href="/#"><img src="http://ojjtsu3yz.bkt.clouddn.com/logo.png"></a> -->
          <p>收钱宝</p>
          <p>{{loginType==='1'?'运营后台':'商户后台'}}</p>
        </div>
        <div class="main">
          <ul v-for="menu in menus">
            <div v-if="menu.child">
              <li v-if="type==='admin' || type==='zhuguan' || type==='caiwu'">
                <a @click="menu.opened=!menu.opened">{{menu.text}}</a>
                <i class="glyphicon {{menu.opened ? 'glyphicon-chevron-down':'glyphicon-chevron-left'}}" v-if="menu.child"></i>
                <ul v-for="ch in menu.child" v-if="menu.child" v-show="menu.opened">
                  <li class="{{currentUrl===ch.url?'current-li':''}}">
                    <a @click="gotoUrl(ch.url, $index)">{{ch.text}}</a>
                  </li>
                </ul>
              </li>
            </div>
            <div v-else>

              <li  class="{{currentUrl===menu.url?'current-li':''}}" v-if="type===menu.type">
                <a @click="gotoUrl(menu.url, $index)" >{{menu.text}}</a></li>
              </div>
            </ul>        
          </div>
        </div>
        <div slot="left_container">
          <toplayout>
            <top slot="top_menu"></top>
            <router-view slot="top_container" class="view" keep-alive transition transition-mode="out-in"> 
            </router-view>
          </toplayout>
        </div>
      </leftlayout>
    </div>
  </template>
  <script>
    import leftlayout from './../components/leftlayout.vue';
    import leftmenu from './../components/leftmenu.vue';
    import toplayout from './../components/toplayout.vue';
    import top from './top.vue';
    import '../../static/css/index.scss';
    export default {
      components: {
        leftmenu,
        leftlayout,
        toplayout,
        top
      },
      vuex: {
        getters: {
        },
        actions: {
        }
      },
      attached(){
        this.loginType = this.$h5getValue('_login-type_');
        this.userType = this.$h5getValue('user_type-');
        if(!this.loginType){
          window.router.go('/login');
        }
        if(this.loginType){
          switch(this.loginType) {
            case '1':
              if(this.userType ==='1'){
                 this.type = 'admin';
              }else if(this.userType ==='2'){
                 this.type = 'zhuguan';
              }else if(this.userType ==='3'){
                 this.type = 'caiwu';
              }else if(this.userType ==='4'){
                 this.type = 'kefu';
              } 
              break;
            case '2':
              if(this.userType ==='1'){
                 this.type = 'ka';
              }else if(this.userType ==='2'){
                 this.type = 'kacaiwu';
              }
              break;
            case '3':
              if(this.userType ==='1'){
                 this.type = 'shop';
              }else if(this.userType ==='2'){
                 // this.type = 'zhuguan';
                 this.type = 'shop';
              }
              break;
            default:
          }
        }
      },  
      data(){
        return{
          userType:'2',
          menus: [{
            text: '订单列表',
            opened:false,
            url: '/index/ordermng',
            type:'admin'
          }, {
            text: '订单列表',
            opened:false,
            url: '/index/ordermng',
            type:'zhuguan'
          }, {
            text: '订单列表',
            opened:false,
            url: '/index/ordermng',
            type:'caiwu'
          }, {
            text: '商户管理',
            url: '/index/storemanagement',
            opened:false,
            type:'admin'
          }, {
            text: '账号管理',
            url: '/index/accountmng',
            opened:false,
            type:'admin'
          }, {
            text: '订单分账审核',
            url: '/index/accountrecord',
            opened:false,
            type:'admin'
          }, {
            text: '订单分账审核',
            url: '/index/accountrecord',
            opened:false,
            type:'caiwu'
          }, {
            text: '订单支付结算',
            url: '/index/paySettlement',
            opened:false,
            type:'admin'
          }, {
            text: '订单支付结算',
            url: '/index/paySettlement',
            opened:false,
            type:'zhuguan'
          }, {
            text: '订单列表',
            opened:false,
            url: '/index/ordermngshop',
            type:'ka'
          }, {
            text: '订单列表',
            opened:false,
            url: '/index/ordermngshop',
            type:'shop'
          }, {
            text: '订单列表',
            opened:false,
            url: '/index/ordermngshop',
            type:'kacaiwu'
          }, {
            text: '门店列表',
            url: '/index/shopmngshop',
            opened:false,
            type:'ka'
          }, {
            text: 'Ka支付结算',
            url: '/index/shopSettlement',
            opened:false,
            type:'ka'
          }, {
            text: 'ka支付数据明细',
            url: '/index/kapayshop',
            opened:false,
            type:'ka'
          }, {
            text: 'ka支付数据汇总',
            url: '/index/kaallpay',
            opened:false,
            type:'ka'
          }, {
             text: 'ka支付结算查询',
             url: '/index/kaSettlement',
             opened:false,
             type:'ka'
          }, {
            text: 'Ka支付结算',
            url: '/index/shopSettlement',
            opened:false,
            type:'kacaiwu'
          }, {
            text: 'ka支付数据明细',
            url: '/index/kapayshop',
            opened:false,
            type:'kacaiwu'
          }, {
            text: 'ka支付数据汇总',
            url: '/index/kaallpay',
            opened:false,
            type:'kacaiwu'
          }, {
             text: 'ka支付结算查询',
             url: '/index/kaSettlement',
             opened:false,
             type:'kacaiwu'
          }, {
            text: '分店支付数据明细',
            url: '/index/shoppayshop',
            opened:false,
            type:'shop'
          }, {
            text: '分店支付数据汇总',
            url: '/index/shopallpay',
            opened:false,
            type:'shop'
          }, {
            text: '收银',
            url: '/index/charge',
            opened:false,
            type:'shop'
          }, {
            text: '支付数据分析',
            url: '/index/wxshopPay',
            opened:false,
            type:'admin',
            child:[
            {
             text: '支付数据明细',
             url: '/index/wxshopPay',
           },
           {
             text: '支付数据汇总',
             url: '/index/wxallpay',
           },
           {
             text: '支付结算查询',
             url: '/index/wxSettlement',
           },
           ]
         }],
         currentUrl:'',
         loginType:'shop',
         type:'9999'
       };
     },
     route:{
      data(transition){

        this.currentUrl = transition.to.path;
      }
    },
    methods:{
      gotoUrl(url, index){
        window.router.go(url);
          // for (let i = 0; i < this.menus.length; i++) {
          //   this.menus[i].opened = false;
          // }
        }
      }
    };
  </script>

