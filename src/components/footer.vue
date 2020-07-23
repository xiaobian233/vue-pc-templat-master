<template>
  <div class="footer">
    <div class="footer-container fsb">
      <div class="footer-link df">
        <div class="footer-link-item" v-for="nav in navList" :key="nav.id">
          <p class="link-title">{{nav.name}}</p>
          <ul>
            <li class="link-child cp" v-for="item in nav.children" :key="item.id" @click="goDetail(item.url)">- {{item.name}}</li>
          </ul>
        </div>
      </div>
      <div class="footer-r df">
        <div class="tel">
          <p class="fz10 c-fff mb-10">热线电话：</p>
          <p class="fz18 fw-600 c-00b">400-890-8855</p>
        </div>
        <div class="qr">
          <img src="../assets/img/qr.png" alt="">
          <div class="fz8 c-999 text-c">扫描关注零一方体</div>
        </div>
      </div>
    </div>
    <div class="author fsb df-ac mt-10">
      <div class="link-icon df">
        <img src="../assets/img/weixin.png" alt="">
        <img src="../assets/img/qq.png" alt="">
        <img src="../assets/img/weibo.png" alt="">
      </div>
      <div class="fsb fz6 c-999">
        <p>Zero One Cube Co., Ltd. All rights reserved</p>
        <p class="ba">沪ICP备:16030460号-4</p>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        navList: [
          {
            id:1,
            name:'首页',
            url:'/',
            show:false,
            children:[]
          },
          {
            id:2,
            name:'为你服务',
            url:'',
            show:false,
            children:[
              {id:21,name:'买矿机',url:'/goods'},
              {id:22,name:'找托管',url:'/trust'},
              {id:23,name:'其他服务',url:'/otherServe'},
            ]
          },
          {
            id:3,
            name:'资讯入口',
            url:'',
            show:false,
            children:[
              {id:31,name:'IPFS   ',url:'/ipfs'},
              {id:32,name:'Filecoin',url:''},
              {id:33,name:'问题解答',url:'/question'}
            ]
          },
          {
            id:4,
            name:'了解我们',
            url:'',
            show:false,
            children:[
              {id:41,name:'了解我们 ',url:'/about'},
              {id:42,name:'联系我们',url:'/callme'}
            ]
          },
        ],
      }
    },
    methods: {
      goDetail(url) {
        this.$router.push(url)
      },
    }
  }
</script>

<style lang="less">
  .footer {
    background-color: #0B0B0B;
    padding: 40px 80px 11px 80px;
    /*height: 202px;*/
    .footer-container {
      border-bottom: 1px solid #333;
    }
    .footer-link {
      .footer-link-item {
        margin-right: 92px;
      }
      .link-title {
        font-size: 10px;
        color: #fff;
        margin-bottom: 26px;
      }
      .link-child {
        font-size: 7px;
        margin-bottom: 10px;
        color: #888;
      }
      ul {
        margin-bottom: 50px;
      }
    }
    .qr {
      margin-left: 40px;
      img {
        width: 85px;
        height: 85px;
        margin-bottom: 11px;
      }
    }
    .tel {
      margin-top: 26px;
    }
    .link-icon {
      img {
        width: 20px;
        height: 20px;
        margin-right: 10px;
      }
    }
    .ba {
      margin-left: 67px;
      margin-right: 10px;
    }
  }
</style>
