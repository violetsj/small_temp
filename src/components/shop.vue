<template>
  <div class="home">
    <div class="main">
      <scroll-view scroll-y style="height:400px;" class="left">
        <div class="search">
          <i-icon type="search" size="40" color="#707070" />
        </div>
        <ul class="ul1">
          <li
            v-for="(item,index) in getfood"
            :key="index"
            :class="tabActive===index? 'active':''"
            @click="setTab(index)"
            class="left2"
          >
            <div class="title">{{item.typename}}</div>
          </li>
          <!-- <li>{{tabActive}}</li> -->
        </ul>
      </scroll-view>

      <scroll-view
        scroll-y
        class="right"
        :scroll-into-view="scrollId"
        scroll-with-animation
        @scroll="scroll"
        @scrolltolower="scrolltolower"
      >
        <ul>
          <li v-for="(item,index) in getfood" :key="index" class="titlerh">
            <div class="title2" :id="'po'+index">{{item.typename}}</div>
            <ul>
              <li class="right2" v-for="(el,dex) in item.foodlist" :key="dex" @click="imgchange($event)">
                <img :src="el.img" alt class="right-leftimg" />
                <div class="right-rightitem">
                  <p class="name">{{el.name}}</p>
                  <span class="price">￥{{el.price}}</span>
                  <span v-if="el.unit==''?false:true" class="unit">/{{el.unit}}</span>
                  <span class="nums">
                    <span @click="del(el)" v-if="el.ordernum<=0?false:true" class="del">-</span>
                    <span class="num" v-if="el.ordernum<=0?false:true">{{el.ordernum}}</span>
                    <span @click="add(el)" class="add">+</span>
                  </span>
                  <!-- <del v-if="el.formerprice">{{el.formerprice}}</del> -->
                </div>
              </li>
            </ul>
          </li>
        </ul>
      </scroll-view>
      <div class="cartlist">
        <div class="cartlist1">
          <span>购物车</span>
          <span @click="empty">
            <i-icon type="trash" size="20" />清空购物车
          </span>
        </div>
        <div class="cartlist2">
          <ul>
            <li v-for="(el,index) in Cart" :key="index">
              <div class="list">
                
                <span class="name">{{el.name}}</span>
                <span class="price">￥{{el.price*el.ordernum}}</span>
                <span class="nums">
                  <span @click="del(el)" class="del">-</span>
                  <span class="num">{{el.ordernum}}</span>
                  <span @click="add(el)" class="add">+</span>
                </span>
              </div>
            </li>
          </ul>
          
        </div>
      </div>
      <div class="cart">
        <div class="cart-left">
          <div class="cart1">
            <i-icon class="icon" size="50" type="publishgoods_fill" />
          </div>
          <div class="cart2">
            <div class="price">
              <span>￥</span>
              <span>{{allprice}}</span>
              <span>￥6</span>
            </div>
            <div class="peisongfei">另需配送费¥2.5</div>
          </div>
        </div>
        <div class="cart-right">
          <div class="right1">去结算</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // num:''
      getfood: [],
      scrollId: "",
      tabActive: 0,
      scrollTop: 0,
      listHeight: [],
      scrollNum: 0,
      num: "",
      cartInfo: [],
      Cart: [],
      allprice:'0',
      Price:0
    };
  },

  computed: {
    count() {
     
    }
  },
  watch:{
    Cart:{
      handler:function(a,b){
       var allprice=0;
      this.Cart.forEach(item => {
          allprice+=item.price*item.ordernum
      });
      this.allprice=allprice.toFixed(2);
      },
      deep:true
    }
  },

  mounted() {
    //   console.log(this.$store.state.num)
    //  this.num=this.$store.state.num;

    // console.log(this.$apis.test())
    // this.$apis.test().then(res=>{
    //   console.log(res)
    // })

    // console.log(this.$apis.getfood())
    let goodlist = [];
    wx.showLoading({
      title: "加载中"
    });
    this.$apis.getfood().then(res => {
      // console.log(res.data.shop_notice);
      this.Datalist = res.data;
      // console.log(this.Datalist);
      // console.log(res.data.foodtype)
      // console.log(res.data.foodlist);

      for (var i = 0; i < res.data.foodtype.length; i++) {
        goodlist.push({
          typename: res.data.foodtype[i].name,
          typeid: res.data.foodtype[i].id,
          foodlist: []
        });
        for (var j = 0; j < res.data.foodlist.length; j++) {
          if (res.data.foodtype[i].id == res.data.foodlist[j].type_id) {
            goodlist[i].foodlist.push(res.data.foodlist[j]);
          }
          //  console.log(goodlist[i].foodlist)
        }
      }

      this.getfood = goodlist;

      wx.hideLoading();
      setTimeout(() => {
        // console.log(this.$refs);
        this.getNodesData();
      }, 80);
    });
  },
  computed: {
    currentIndex() {
      this.scrollTop = this.scrollTop + 200;
      for (var i = 0; i < this.listHeight.length; i++) {
        var height1 = this.listHeight[i];
        var height2 = this.listHeight[i + 1];
        // console.log(height1,height2)
        if (this.scrollTop >= height1 && this.scrollTop < height2) {
          this.tabActive = i;
          return i;
        }
      }
      // console.log(i)

      // return this.scrollTop
    }

  },

  methods: {
    setTab(index) {
      // console.log(index);
      this.scrollId = "po" + index;
      this.tabActive = index;
    },

    add(item) {
      item.ordernum++;
      this.$store.commit("add", item);
      // console.log(item)
      // console.log(this.$store.state.cartList);
      this.Cart = this.$store.state.cartList;
      // console.log(item)
      // console.log(this.Cart);
    },
    del(item) {
      item.ordernum--;
      if (item.ordernum <= 0) {
        item.ordernum = 0;
      }
      this.$store.commit("del", item);
      // console.log(this.$store.state.cartList);
      // console.log(item)
    },
    empty(){
      this.Cart=[]
    },
    imgchange(e){
      console.log(e.target)
      // wx.previewImage({
      //   current:e.target,
      //   urls:'http://p0.meituan.net/xianfu/a5bf686b8ab1e8147bb3959446f4ad2a277768.jpg@150w_150h_80Q_0e_1l.webp'
      // })
    },
    scroll(e) {
      // console.log(e.target.scrollTop)
      this.scrollTop = e.target.scrollTop;
      // console.log(this.scrollTop);
    },
    getNodesData() {
      var query = wx.createSelectorQuery();
      // select    id
      // selectAll class
      //  console.dir(query)
      // console.dir(query.selectAll(".titlerh"));
      query
        .selectAll(".titlerh")
        .boundingClientRect(nodes => {
          nodes.map((item, index) => {
            this.listHeight.push(item.top);
          });
          // console.log(this.listHeight);
          // console.log(nodes);
        })
        .exec();
    },
    scrolltolower() {
      setTimeout(() => {
        this.tabActive = this.listHeight.length - 1;
      }, 80);
    }
  }
};
</script>

<style scoped lang="scss">
.main {
  width: r(375);
  height: r(667);
  display: flex;
  .search {
    width: r(80);
    height: r(52);
    line-height: r(52);
    text-align: center;
  }
  .ul1 {
    width: r(100);
  }
  .left {
    left: 0;
    top: r(50);
    right: 0;
    bottom: 0;
    width: r(100);
    .left2 {
      width: r(100);
    }
    .title {
      width: r(100);
      height: r(50);
      line-height: r(50);
      font-size: r(15);
      padding: r(5) r(10);
    }
  }
  .right {
    top: r(10);
    right: r(40);
    bottom: r(10);
    overflow-x: hidden;
    overflow-y: scroll;
    img {
      width: r(62);
      height: r(62);
    }
    .right-rightitem {
      width: r(220);
      height: r(84);
      position: relative;
    }
    .right2 {
      width: r(290);
      height: r(83);
      display: flex;
      margin-top: r(20);

      .name {
        color: #2f2f2f;
        font-size: r(15);
        padding-left: r(15);
      }
      .price {
        color: #f87a7c;
        font-size: r(16);
        margin-top: r(100);
        padding-left: r(15);
        height: r(70);
        line-height: r(70);
      }
      .unit {
        color: #a9a9a9;
        font-size: r(14);
      }
      .nums {
        .num {
          position: absolute;
          right: r(53);
          top: r(60);
        }
        .del {
          display: inline-block;
          width: r(25);
          height: r(25);
          border-radius: 50%;
          background: #dddddd;
          color: #a9a9a9;
          line-height: r(20);
          text-align: center;
          position: absolute;
          right: r(70);
          top: r(60);
          font-size: r(30);
        }
        .add {
          display: inline-block;
          width: r(25);
          height: r(25);
          border-radius: 50%;
          background: #ffc847;
          line-height: r(25);
          text-align: center;
          position: absolute;
          right: r(20);
          top: r(60);
          font-size: r(20);
          font-weight: 800;
        }
      }
    }
    .title2 {
      height: r(30);
      line-height: r(30);
      font-weight: 800;
      border-left: 3px solid #f87a7c;
      padding-left: r(12);
    }
  }
  .active {
    color: #f87a7c;
    border-left: 3px solid #f87a7c;
  }

  .cart {
    display: flex;
    justify-content: space-between;
    position: fixed;
    bottom: 0;
    margin-top: r(200);
    width: 100%;
    height: r(50);
    .cart-left {
      width: r(270);
      background: #3b3b3c;
      .cart1 {
        margin-left: r(15);
        width: r(50);
        height: r(50);
        border-radius: 50%;
        background: #ffc847;
        line-height: r(50);
        text-align: center;
        position: absolute;
        top: r(-10);
      }
      .cart2 {
        margin-left: r(80);
        color: #fff;
        .price {
          color: #fff;
          :nth-child(1) {
            font-size: r(16);
          }
          :nth-child(2) {
            font-size: r(24);
            padding-left: r(5);
          }
          :nth-child(3) {
            font-size: r(12);
          }
        }
        .peisongfei {
          color: #999;
          font-size: r(12);
        }
      }
    }
    .cart-right {
      width: r(105);
      line-height: r(50);
      background: #2e2d2d;
      text-align: center;
      .right1 {
        color: #999;
        font-size: r(16);
      }
    }
  }
  .cartlist {
    width: 100%;

    position: fixed;
    background: #fff;
    bottom: r(50);
    /* padding:0 r(15) */
  }
  .cartlist1 {
    display: flex;
    justify-content: space-between;
    text-align: center;
    padding: r(5) r(15);
    font-size: r(12);
  }
  .cartlist2 {
    .list {
      display: flex;
      justify-content: space-between;
      width: 100%;
      text-align: center;
      margin: r(20) 0;
      .name {
        font-size: r(16);
        color: #333;
        width: r(100);
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
      }
      .price {
        color: #f87a7c;
        font-size: r(16);
        font-weight: 800;
      }
      .nums {
        margin: 0 r(15);
        .num {
          margin: r(0) r(10);
        }
        .del {
          display: inline-block;
          width: r(25);
          height: r(25);
          border-radius: 50%;
          background: #dddddd;
          color: #a9a9a9;
          line-height: r(17);
          text-align: center;

          font-size: r(30);
        }
        .add {
          display: inline-block;
          width: r(25);
          height: r(25);
          border-radius: 50%;
          background: #ffc847;
          line-height: r(25);
          text-align: center;
          font-size: r(20);
          font-weight: 800;
        }
      }
    }
  }
}
</style>
