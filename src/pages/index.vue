<template>
  <div style="height: 100vh;overflow-y: scroll" ref="container" @scroll="changeScroll">
    <div class="page-index fz30">
      <myHeader class="fix-header" :isScroll="isScroll"></myHeader>
      <div class="s1">
        <div class="line"></div>
        <div class="t1 fz14 c-fff">listen more，think more  ---- {{$t("message.hello")}}</div>
        <div class="des">
          <h2>The art of listening</h2>
          <p class="des1">Listen is a voice social software based on data decentralized storage technology and
            blockchain technology.</p>
        </div>

        <div class="df">
          <div class="btn bg-d7 c-47 mr-40">Obtain Listen</div>
          <div class="btn btn-boder c-d7 df-ac"><img src="../assets/img/icon-play.png" alt="" class="icon-play"> Open
            Listen</div>

        </div>

      </div>
      <div class="s2 text-c">
        <h3 class="s-title">Products on Listen</h3>
        <p class="c-333 fz24">Data is no longer kept and developed by centralized organizations. The data <br>
          will be stored in a decentralized manner and authorized by the user.</p>
      </div>
      <div class="s3">
        <div class="card pl card-1">
          <div class="left pd">
            <img src="../assets/img/i1-l.jpg" alt="" class="img-l">
            <img src="../assets/img/i1-s.png" alt="" class="img-s">
          </div>
          <div class="right">
            <div class="index">01</div>
            <div class="c-d7 title mb-20">Data <br> privacy trends</div>
            <div class="line-s"></div>
            <div class="p-item">Data is no longer kept and developed by centralized organizations. The data will be
              stored in a decentralized manner and authorized by the user.</div>
            <div class="p-item">Personal privacy is stored locally and encrypted, and users are authorized to use it for
              a fee.</div>
            <div class="p-item">The right to speak and decide are dispersedly controlled, users decide the survival of
              groups, and group awareness is the best way to resist censorship.</div>
          </div>
        </div>
        <div class="card pl card-2 fsb">
          <div class="right">
            <div class="index">02</div>
            <div class="c-d7 title mb-20">Own value<br>
              social network</div>
            <div class="line-s"></div>
            <div class="p-item">LT bears the value of LISTEN social network. Every user no <br>longer just uses social
              network, but really owns it.</div>
            <div class="p-item">Listening to valuable expressions, expressing valuable listening.</div>
            <div class="p-item">Every user is the governor of LISTEN underlying blockchain.</div>
          </div>
          <div class="imgbox">
            <img src="../assets/img/i2-l.jpg" alt="" class="i1">
            <img src="../assets/img/i2-s.png" alt="" class="i2">
          </div>
        </div>
        <div class="card pl card-3">
          <div class="imgbox">
            <img src="../assets/img/i3-l.jpg" alt="" class="i3">
            <img src="../assets/img/i3-s.png" alt="" class="i4">
          </div>
          <div class="right">
            <div class="index">03</div>
            <div class="c-d7 title mb-20">Encrypted <br>
              communication</div>
            <div class="line-s"></div>
            <div class="p-item">In end-to-end encrypted communications, decentralization is <br> the best way to resist
              censorship.</div>
            <div class="p-item">No ads, no tracking.</div>
          </div>
        </div>
        <div class="card pl card-4">
          <div class="right">
            <div class="index">04</div>
            <div class="c-d7 title mb-20">Value <br>
              transfer</div>
            <div class="line-s"></div>
            <div class="p-item">Blockchain-based token sending is as simple as sending a <br> Message.</div>
            <div class="p-item">No barriers to borders, no peer-to-peer payment by intermediate service <br> providers.
            </div>
            <div class="p-item">Adapt to multiple stable currency payment networks around the world.</div>
          </div>
          <div class="imgbox">
            <img src="../assets/img/i4-l.jpg" alt="" class="i5">
            <img src="../assets/img/i4-s.png" alt="" class="i6">
          </div>
        </div>
      </div>
      <div class="s4">
        <div class="top df-ac">
          <div class="line-a mr-20"></div>
          <div class="text">Product download</div>
        </div>
        <h5>Download Listen</h5>
        <p>Listen, as a voice social software, is very different from other communication tools, and is also different
          from the podcast software. It supports social networking of acquaintances, including social methods such as
          voice, pictures, text, and video.</p>
        <div class="df">
          <div class="btn-l btn">Ios user</div>
          <div class="btn-a btn">Android user</div>
        </div>
      </div>
      <div class="s5 s4">
        <div class="top df-ac">
          <div class="line-a mr-20"></div>
          <div class="text">white paper</div>
        </div>
        <h5>Privacy-protected data transaction agreement</h5>
        <p>Listen guarantees the reliable execution of smart contracts while keeping the data secretly.Confidential
          contracts run in miner nodes with Trusted Computing capable hardwares, which guarantees the secrecy of the
          contract data</p>
        <div class="df">
          <div class="btn-l btn">White Paper-Chinese</div>
          <div class="btn-l btn">White Paper-English</div>
        </div>
      </div>
      <div class="s6 text-c">
        <h5>Frequently asked questions</h5>
        <h6>Web3.0 Parallel Chain of Cross-Chain Polka Ecology</h6>
        <h3>新用户如何获取LT?</h3>
        <p>新用户直接到水⻰头领取</p>
        <h3>用户没有LT时，是不是不能说话了?</h3>
        <p>新用户直接到水⻰头领取</p>
        <h3>Listen的使用会不会很难?</h3>
        <p>并不会，因为是去中心化产品，其实跟普通的社交软件是差不多的。</p>
        <h3>Listen底层区块链技术是独创的吗?</h3>
        <p>Listen底层区块链是基于Substrate开发的应用公链，是Web3.0跨链波卡生态的平行链。</p>
      </div>
    </div>
    <!-- <div class="cover" v-if="show"> -->
    <div class="cover" :class="{fadeout:!show}">
      <div class="desc text-c">
        <div class="fz20">The art of listening</div>
        <img src="../assets/img/logo.png" alt="" class="c-logo">
        <p>Listen is a voice social software based on data decentralized storage <br> technology and blockchain
          technology.</p>
      </div>
      <div class="arrow heart" @click="handleClick">
        <!-- <img src="../assets/img/arrow.png" alt=""> -->
      </div>
      <div class="mask" @click="handleClick"></div>
    </div>
  </div>

</template>

<script>
  import myHeader from '@/components/header'
  export default {
    data() {
      return {
        isScroll: false,
        show: true
      }
    },
    created() {

    },
    methods: {
      changeScroll() {
        let top = this.$refs.container.scrollTop
        console.log(top)
        if (top > 50) {
          this.isScroll = true
        } else {
          this.isScroll = false
        }
      },
      handleClick() {
        this.show = false
      }
    },
    components: {
      myHeader
    }
  }
</script>

<style lang="less">
  .cover {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    z-index: 2000;
    background-image: url(../assets/img/bg.jpg);
    background-size: cover;
    background-repeat: no-repeat;

    .mask {
      height: 10%;
      position: absolute;
      bottom: 0;
      width: 100%;
      left: 0;
      cursor: pointer;
    }

    .desc {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      color: #fff;

      .c-logo {
        width: 556px;
        height: 60px;
        margin-bottom: 50px;
        margin-top: 50px;
      }

      p {
        font-size: 18px;
        line-height: 46px;
      }
    }

    .arrow {
      width: 24px;
      height: 24px;
      position: absolute;
      left: 50%;
      bottom: 40px;
      transform: translateX(-50%);
      cursor: pointer;
      background-image: url('../assets/img/arrow.png');
      background-size: cover;
      // z-index: 3000;
    }
  }

  .page-index {
    .fix-header {
      position: fixed;
      top: 0;
      left: 0;
      z-index: 100;
    }

    .s1 {
      width: 100%;
      height: 1080px;
      background-image: url(../assets/img/bg-1.jpg);
      background-size: 100% 100%;
      background-repeat: no-repeat;
      position: relative;
      padding-top: 180px;
      padding-left: 100px;
      margin-bottom: 120px;

      .line {
        width: 233px;
        height: 2px;
        background-color: #fff;
        position: absolute;
        left: 0;
        top: 188px;
      }

      .t1 {
        margin-left: 435px;
        margin-bottom: 120px;
      }

      .icon-play {
        width: 24px;
        height: 24px;
        margin-right: 10px;
      }

      .des {
        color: #fff;

        h2 {
          font-size: 78px;
          font-weight: bold;
          margin-bottom: 40px;
        }

        p {
          font-size: 26px;
          line-height: 46px;
          width: 596px;
          margin-bottom: 120px;
        }
      }
    }

    .s2 {
      margin-bottom: 180px;

      .s-title {
        font-size: 48px;
        font-weight: bold;
        margin-bottom: 20px;
      }

      p {
        line-height: 30px;
      }
    }

    .s3 {
      .card {
        display: flex;

        .card-1 {
          margin-bottom: 200px;
        }

        &.card-2 {
          padding-left: 470px;
          padding-top: 200px;
        }

        &.card-3 {
          margin-left: 0;

          .imgbox {
            margin-right: 130px;
          }
        }

        &.card-4 {
          padding-top: 220px;
          padding-left: 411px;
          padding-bottom: 260px;

          .right {
            padding-top: 270px;
          }
        }

        .left {
          margin-right: 150px;
          position: relative;

          &.pd {
            /*padding-left: 380px;*/
            margin-left: 380px;
          }

          .img-s {
            position: absolute;
            top: 272px;
            left: -208px;
          }

          .img-l {
            width: 412px;
            height: 528px;
          }

          .img-s {
            width: 277px;
            height: 350px;
          }
        }

        .right {
          padding-right: 358px;
          padding-top: 67px;

          .index {
            font-size: 24px;
            color: #000;
            margin-bottom: 10px;
          }

          .title {
            font-size: 58px;
            line-height: 72px;
          }
        }

        .line-s {
          width: 67px;
          height: 1px;
          background-color: #000;
          margin-bottom: 60px;
        }

        .p-item {
          padding-left: 27px;
          position: relative;
          color: #5F4C21;
          margin-bottom: 30px;
          line-height: 24px;
          font-size: 16px;

          &:last-child {
            margin-bottom: 0;
          }

          &::after {
            content: "";
            position: absolute;
            width: 12px;
            height: 10px;
            background-image: url(../assets/img/iocn-1.png);
            -webkit-background-size: cover;
            background-size: cover;
            background-repeat: no-repeat;
            left: 0;
            top: 10px;
          }
        }
      }
    }

    .imgbox {
      position: relative;

      .i1 {
        width: 618px;
        height: 800px;
      }

      .i2 {
        width: 276px;
        height: 344px;
        position: absolute;
        top: 135px;
        left: -138px;
      }

      .i3 {
        width: 686px;
        height: 448px;
      }

      .i4 {
        position: absolute;
        width: 344px;
        height: 275px;
        bottom: -138px;
      }

      .i5 {
        width: 618px;
        height: 802px;
      }

      .i6 {
        position: absolute;
        width: 272px;
        height: 340px;
        top: 324px;
        left: -136px;
      }

    }

    .s4 {
      height: 839px;
      background-image: url(../assets/img/bg-2.jpg);
      background-repeat: no-repeat;
      -webkit-background-size: cover;
      background-size: cover;
      padding-top: 170px;
      padding-left: 200px;

      &.s5 {
        height: 980px;
        padding-top: 258px;
        background-image: url(../assets/img/bg-3.jpg);
        color: #fff;

        .top .line-a {
          background-color: #fff;
        }

        .btn-l {
          box-shadow: none;
        }
      }

      .top {
        margin-bottom: 30px;

        .line-a {
          width: 90px;
          height: 2px;
          background-color: #000;
        }

        .text {
          font-size: 14px;
          line-height: 20px
        }
      }

      h5 {
        font-size: 48px;
        font-weight: bold;
        margin-bottom: 43px;
      }

      p {
        font-size: 24px;
        line-height: 33px;
        width: 654px;
        margin-bottom: 100px;
      }

      .btn-l {
        padding: 10px 30px;
        background-color: #D7C294;
        box-shadow: 0px 0px 20px 1px rgba(215, 194, 148, 1);
        color: #5F4C21;
        font-size: 14px;
        margin-right: 80px;


      }

      .btn-a {
        padding: 10px 30px;
        color: #D7C294;
        border: 1px solid #D7C294;
        font-size: 14px;
      }
    }

    .s6 {
      padding-top: 107px;

      h5 {
        font-size: 48px;
        line-height: 67px;
        margin-bottom: 16px;
      }

      h6 {
        font-size: 24px;
        line-height: 33px;
        margin-bottom: 106px;
      }

      h3 {
        font-size: 28px;
        line-height: 40px;
        margin-bottom: 15px;
        font-weight: bold;
      }

      p {
        font-size: 22px;
        line-height: 30px;
        margin-bottom: 60px;
      }
    }
  }

  .fadeout {
    animation: moveout 1s .1s ease both;
  }

  .heart {
    z-index: 9999;
    animation: bounce 1s .1s ease infinite;
  }

  @keyframes bounce {
    0% {
      transform: translateY(0px);
      bottom: 40px;
    }

    50% {
      transform: translateY(-10px);
      bottom: 60px;
    }

    100% {
      transform: translateY(0px);
      bottom: 40px;
    }
  }

  @keyframes moveout {
    0% {
      // height: 100%;
      top: 0;
      opacity: 1;
    }

    50% {
      opacity: 1;
    }

    80% {
      opacity: 0.8;
    }

    100% {
      // height: 0;
      top: -100%;
      opacity: 0;
    }
  }
</style>
