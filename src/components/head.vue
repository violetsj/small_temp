<template>
  <div>
    <ul class="tab-wrapper">
      <li class="tab-item">
          <a href="" @click="setab(1)" :class="tabActive===1? 'active':''">选购</a>
      </li>
      <li class="tab-item" >
          <a href="" @click="setab(2)" :class="tabActive===2? 'active':''">评价</a>
      </li>
      <li class="tab-item">
          <a href="" @click="setab(3)" :class="tabActive===3? 'active':''">商家</a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tabActive: 1
    };
  },
  methods: {
    setab(index) {
      this.$eventHub.$emit("setTab", index);
      this.tabActive=index
    }
  }
};
</script>

<style lang='scss'>
.tab-wrapper {
  display: flex;
  justify-content: space-between;
  .tab-item {
    width: r(55);
    height: r(40);
    line-height: r(40);
    text-align: center;
    color: #676767;
    font-size: r(17);
    padding:r(5) r(30);
    a{
        width: r(60);
    }
  }
  .active {
    color: #373737;
    font-weight: 700;
    border-bottom: r(2) solid #f87a7c;
  }
}
</style>
