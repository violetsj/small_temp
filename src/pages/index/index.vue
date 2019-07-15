<template>
  <div class="header">
    <div class="header-wrapper">
      <div class="f-block-1">
        <div class="u-avator11">
          <img
            class="u-avator"
            src="http://img.zhipuzi.com/upload_files/image/20190525/cae29Soa7761JuMGuhL1GRrIKg1gN44g.jpg!max80"
          />
        </div>

        <div class="u-block-1">
          <div class="shopname">{{Datalist.shopname}}</div>
          <div class="uu">
            <span class="icon">
              <i-icon type="systemprompt" color="#f87a7c" size="24" class="icon1" />
            </span>
            <span class="gonggao">{{Datalist.shop_notice}}</span>
          </div>
          <!-- <i-notice-bar  icon="systemprompt" background-color="#a8a383;">{{Datalist.shop_notice}}</i-notice-bar> -->
        </div>

        <div class="u-collect">
          <i-icon type="like" size="28" color="#fff;" />
          <p class="shoucang">收藏</p>
        </div>
      </div>
    </div>
    <div class="f-block-2"></div>

    <div>
      <lay_head></lay_head>
      <shop v-if="tabNum==1"></shop>
      <assess v-if="tabNum==2"></assess>
      <my v-if="tabNum==3"></my>
    </div>
  </div>
</template>

<script>
import lay_head from "@/components/head";
import assess from "@/components/assess";
import my from "@/components/my";
import shop from "@/components/shop";

export default {
  data() {
    return {
      Datalist: {},
      tabNum: 1
    };
  },

  computed: {
    count() {
      return this.$store.state.num;
    }
  },

  mounted() {
    this.$apis.getfood().then(res => {
      this.Datalist = res.data;
      // console.log(res.data);
    });

    this.$eventHub.$on("setTab", res => {
      // console.log(res);
      this.tabNum = res;
      console.log(this.tabNum);
    });
    return;
  },
  components: {
    lay_head,
    assess,
    my,
    shop
  }
};
</script>

<style scoped lang="scss">
.header {
  position: fixed;
  top: 0;
}
.header-wrapper {
  width: 100%;
  height: r(71);
  background: #a8a383;
  .f-block-1 {
    display: flex;
    padding: r(10) r(0);
    .u-avator {
      width: r(51);
      height: r(51);
      border-radius: 50%;
    }
  }
  .u-block-1 {
    width: r(266);
    color: #fff;
    /* padding-left: r(10); */
    .shopname {
      font-size: r(16);
    }
    .uu {
      height: r(30);
      line-height: r(30);
      width: 100%;
      .i-icon {
        vertical-align: top !important;
      }
    }

    .gonggao {
      width: r(237);
      height: r(12);
      line-height: r(12);
      overflow: hidden;
      font-size: r(12);
      display: inline-block;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
  }
  .u-collect {
    width: r(60);
    height: r(45);
    /* margin-top: r(5); */
    border-left: 2px solid #fff;
    text-align: center;
  }
  .shoucang {
    color: #fff;
    font-size: r(16);
    padding-top: r(6);
  }
}
.f-block-2 {
  width: 100%;
  height: r(33);
  border-top: 1px dashed #fff;
  background: #a8a383;
}
</style>
