<template>
  <div>
    <!-- 头部logo搜素区 -->
    <Header></Header>
    <!-- 主体区 -->
    <router-view></router-view>
    <!-- 底部展示区 -->
    <Footer
      v-show="$route.meta.isShowFooter"
    ></Footer>
  </div>
</template>

<script>
import Header from "./components/Header/Header.vue";
import Footer from "./components/Footer/Footer.vue";
export default {
  name: "App",
  components: {
    Header,
    Footer,
  },
  mounted(){
    //通知Vuex发送请求，获取数据，存储于仓库中
    this.$store.dispatch("categoryList");
  }
};
</script>

<style lang="less" scoped>
</style>
