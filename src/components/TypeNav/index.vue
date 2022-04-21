<template>
  <!-- 商品分类导航 -->
  <div class="type-nav">
    <div class="container">
      <!-- 事件的委派 -->
      <div @mouseleave="leaveIndex" @mouseenter="enterShow">
        <h2 class="all">全部商品分类</h2>
        <transition
          appear
          name="animate__animated animate__bounce"
          enter-active-class="animate__fadeIn"
          leave-active-class="animate__fadeOut"
        >
          <!-- 三级联动 -->
          <div class="sort" v-show="isShow">
            <!-- 利用事件委派+编程式盗汗实现路由跳转 -->
            <div class="all-sort-list2" @click="goSearch">
              <div
                class="item"
                v-for="(c1, index) in categoryList"
                :key="c1.categoryId"
                :class="{ cur: currentIndex === index }"
              >
                <h3 @mouseover="changeIndex(index)">
                  <a
                    :data-categoryName="c1.categoryName"
                    :data-category1Id="c1.categoryId"
                    >{{ c1.categoryName }}</a
                  >
                </h3>
                <!-- 二级和三级分类 -->
                <div
                  class="item-list clearfix"
                  :style="{ display: currentIndex == index ? 'block' : 'none' }"
                >
                  <div
                    class="subitem"
                    v-for="c2 in c1.categoryChild"
                    :key="c2.categoryId"
                  >
                    <dl class="fore">
                      <dt>
                        <a
                          :data-categoryName="c2.categoryName"
                          :data-category2Id="c2.categoryId"
                          >{{ c2.categoryName }}</a
                        >
                      </dt>
                      <dd>
                        <em v-for="c3 in c2.categoryChild" :key="c3.categoryId">
                          <a
                            :data-categoryName="c3.categoryName"
                            :data-category3Id="c3.categoryId"
                            >{{ c3.categoryName }}</a
                          >
                        </em>
                      </dd>
                    </dl>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </transition>
      </div>
      <nav class="nav">
        <a href="###">服装城</a>
        <a href="###">美妆馆</a>
        <a href="###">尚品汇超市</a>
        <a href="###">全球购</a>
        <a href="###">闪购</a>
        <a href="###">团购</a>
        <a href="###">有趣</a>
        <a href="###">秒杀</a>
      </nav>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import throttle from "lodash/throttle";
import "animate.css";
export default {
  name: "TypeNav",
  data() {
    return {
      //存储用户移动到的一级分类下标
      currentIndex: -1,
      //三级联动的显式与隐藏
      isShow: true,
    };
  },
  mounted() {
    //判断当前路由，如果不是Home路由isShow为false
    if (this.$route.path !== "/home") {
      this.isShow = false;
    }
  },
  computed: {
    //对象写法
    ...mapState({
      categoryList: (state) => state.home.categoryList,
    }),
  },
  methods: {
    //鼠标进入一级分类修改currentIndex数据
    changeIndex: throttle(function (index) {
      // console.log(index);
      this.currentIndex = index;
    },500),
    //鼠标移出一级分类 currentIndex变为-1
    leaveIndex() {
      this.currentIndex = -1;
      if (this.$route.path !== "/home") {
        this.isShow = false;
      }
    },
    //进行路由跳转
    goSearch(event) {
      //最好的解决方案：利用事件的委派+编程式路由导航
      /* 
      利用事件的委派存在一些问题：
      1.点击的不一定是a标签
      2.你确定点击到a标签，又如何区分是一级二级还是三级分类的标签 
      */
      /* 
     解决方案：
     1.在子节点a标签上添加自定义属性data-categoryName，其余子节点是没有的，可以用event.target获取到当前触发事件的节点，只要带有data-categoryName属性的节点，就一定是a标签,event.target.dataset可以获取到当前节点属性（是一个对象）,如果有categoryname属性就一定是a标签
     2.通过区分自定义属性data-category1Id来区分是几级a标签
     */
      const { categoryname, category1id, category2id, category3id } =
        event.target.dataset;
      // console.log(event.target.dataset);
      if (categoryname) {
        //整理跳转的参数
        let location = { name: "search" };
        let query = { categoryName: categoryname };
        if (category1id) {
          query.category1Id = category1id;
        } else if (category2id) {
          query.category2Id = category2id;
        } else {
          query.category3Id = category3id;
        }
        if (this.$route.params) {
          location.params = this.$route.params;
          //整理完参数
          location.query = query;
          //跳转路由
          // console.log(location);
          this.$router.push(location);
        }
      }
    },
    //当鼠标移入的时候，让商品分类列表进行展示
    enterShow() {
      this.isShow = true;
    },
  },
};
</script>

<style lang="less" scoped>
.type-nav {
  border-bottom: 2px solid #e1251b;

  .container {
    width: 1200px;
    margin: 0 auto;
    display: flex;
    position: relative;

    .all {
      width: 210px;
      height: 45px;
      background-color: #e1251b;
      line-height: 45px;
      text-align: center;
      color: #fff;
      font-size: 14px;
      font-weight: bold;
    }

    .nav {
      a {
        height: 45px;
        margin: 0 22px;
        line-height: 45px;
        font-size: 16px;
        color: #333;
      }
    }

    .sort {
      position: absolute;
      left: 0;
      top: 45px;
      width: 210px;
      height: 461px;
      position: absolute;
      background: #fafafa;
      z-index: 999;

      .all-sort-list2 {
        .item {
          h3 {
            line-height: 30px;
            font-size: 14px;
            font-weight: 400;
            overflow: hidden;
            padding: 0 20px;
            margin: 0;

            a {
              color: #333;
            }
          }

          .item-list {
            display: none;
            position: absolute;
            width: 734px;
            min-height: 460px;
            background: #f7f7f7;
            left: 210px;
            border: 1px solid #ddd;
            top: 0;
            z-index: 9999 !important;

            .subitem {
              float: left;
              width: 650px;
              padding: 0 4px 0 8px;

              dl {
                border-top: 1px solid #eee;
                padding: 6px 0;
                overflow: hidden;
                zoom: 1;

                &.fore {
                  border-top: 0;
                }

                dt {
                  float: left;
                  width: 54px;
                  line-height: 22px;
                  text-align: right;
                  padding: 3px 6px 0 0;
                  font-weight: 700;
                }

                dd {
                  float: left;
                  width: 415px;
                  padding: 3px 0 0;
                  overflow: hidden;

                  em {
                    float: left;
                    height: 14px;
                    line-height: 14px;
                    padding: 0 8px;
                    margin-top: 5px;
                    border-left: 1px solid #ccc;
                  }
                }
              }
            }
          }
        }
        .cur {
          background-color: skyblue;
        }
      }
    }
  }
}
</style>