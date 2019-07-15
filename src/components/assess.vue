<template>
  <div>
    <scroll-view scroll-y style="height:400px;">
      <div class="v-container">
        <div class="comment-top">
          



          <div class="content-left">
            <div class="content-l-grade">
              <p class="commentgrade">{{Info.commentgrade}}</p>
            </div>
            <p class="total">平均得分</p>
            <p class="content-t">
              <span>(评论数</span>
              <span class="commentPeople" style="color: #df5458;padding:0 5px;">{{comment_num}}</span>
              <span>条)</span>
            </p>
          </div>
          <div class="content-right">
            <p>
              <i-rate count="5" value="5" class="p1"></i-rate>
              <span class="num">{{commentgradePeople.grade_5}}</span>
            </p>
            <p>
              <i-rate count="5" value="4"></i-rate>
              <span class="num">{{commentgradePeople.grade_4}}</span>
            </p>
            <p>
              <i-rate count="5" value="3"></i-rate>
              <span class="num">{{commentgradePeople.grade_3}}</span>
            </p>
            <p>
              <i-rate count="5" value="2"></i-rate>
              <span class="num">{{commentgradePeople.grade_2}}</span>
            </p>
            <p>
              <i-rate count="5" value="1"></i-rate>
              <span class="num">{{commentgradePeople.grade_1}}</span>
            </p>
          </div>
        </div>

        <div class="comment-middle">
          <div class="comment-middle-wrap" v-for="(item,index) in Datalist" :key="index">
            <div
              class="comment-item"
              @click="sel(index)"
              :class="Tabactive===index?'active':''"
            >{{item.name}}({{item.num}})</div>
          </div>
        </div>

        <div class="comment-bottom">
          <ul class="comment-list">
            <li v-for="(item,index) in List" :key="index">
              <div class="customer">
                <span class="customer-name">{{item.lewaimai_customer_id}}</span>
                <span class="star-wrapper">
                  <i-rate count="5" :value="item.grade"></i-rate>
                </span>
              </div>
              <div class="customer-rating">{{item.content}}</div>
              <div v-if="item.imgurl.length==0?false:true" class="imgurl">
                <img class="imgs" :src="'https://img.zhipuzi.com'+item.imgurl+'!max200'" alt />
              </div>
              <!-- https://img.zhipuzi.com/upload_files/image/20190625/ZnCoyfVpyONMckf7VmGhJuLjeU6q6GyB.jpg!max200 -->
              <!-- /upload_files/image/20190625/ZnCoyfVpyONMckf7VmGhJuLjeU6q6GyB.jpg -->
              <p class="time">{{item.time}}</p>
            </li>
          </ul>
        </div>
      </div>
    </scroll-view>
  </div>
</template>

<script>
export default {
  data() {
    return {
      List: [],
      Info: {},
      comment_num: "",
      commentgradePeople: {},
      Datalist: [],
      Tabactive: 0
    };
  },
  mounted() {
    this.pageinit();
    this.$apis.info().then(res => {
      this.Info = res.data;
      this.comment_num = res.data.shop.comment_num;
      this.commentgradePeople = res.data.commentgradePeople;
      this.Datalist = res.data.tag_num;

      // console.log(res.data.commentgradePeople);
    });
  },
  methods: {
    sel(index) {
      this.Tabactive = index;
      this.pageinit();
    },
    pageinit() {
      this.$apis.list(this.Tabactive).then(res => {
        this.List = res.data.comments;
        // console.log(res.data);
      });
    }
  }
};
</script>

<style lang='scss'>
.v-container {
  .comment-top {
    display: flex;
    justify-content: space-between;
    width: 100%;
    height: r(145);
    background-color: #fff;
    margin-top: r(15);
    .content-left {
      width: r(158);
      height: r(145);
      text-align: center;
      border-right: 2px solid #ebebeb;
      .content-l-grade {
        text-align: center;
        margin-top: r(25);
        padding-bottom: r(15);
        .commentgrade {
          text-align: center;
          font-size: r(35);
          color: #df5458;
        }
        .total {
          color: #676767;
          font-size: r(14);
        }
        .content-t {
          color: #676767;
          font-size: r(14);
        }
      }
    }
    .content-right {
      width: r(213);
      height: r(128);
      text-align: center;

      .num {
        color: #fcbb2b;
        margin-left: r(25);
        font-weight: 600;
      }
      .p1 {
        margin-left: r(10);
      }
    }
  }
  .comment-middle {
    display: flex;
    width: r(350);
    height: r(40);
    padding: r(6) r(15) 0 r(9);
    .comment-middle-wrap {
      padding: 0 r(15);
      width: r(78);
      height: r(30);
      .comment-item {
        width: r(80);
        height: r(25);
        font-size: r(14);
        padding: r(5) 0 0 r(5);
        border-radius: r(16);
        border: 1px solid #c2c2c2;
        text-align: center;
        color: #c2c2c2;
      }
      .active {
        border-color: #f87a7c !important;
        color: #f87a7c !important;
        background-color: #ffe7e7;
      }
    }
  }
  .comment-bottom {
    padding-left: r(20);
    padding-top: r(15);
    .comment-list {
      .customer {
        display: flex;
        justify-content: space-between;
        padding: r(15) r(0);
        .customer-name {
          font-size: r(16);
          color: #373737;
          font-weight: 600;
        }
        .star-wrapper {
          margin-right: r(15);
        }
      }
      .customer-rating {
        font-size: r(12);
        padding: r(12) r(18) 0 0;
        color: #373737;
      }
       .imgurl {
        .imgs {
        width: r(175);
        height: r(175);
      }
      }
      .time{
        font-size:r(12);
        color: #373737;
        padding-left:r(220);
      } 
      
    }
  }
}
</style>
