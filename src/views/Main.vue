<template>
  <div id="container">
    <div class="left">
      <aside>
        <div class="block">
          <span class="demonstration">通用管理系统</span>
          <el-cascader class="menu" v-model="value" :options="options" :props="{ expandTrigger: 'hover' }"
            @change="handleChange">
          </el-cascader>
        </div>
      </aside>
    </div>
    <div class="right">
      <header>
        <div class="head-img"></div>
        {{title}}
        <div class="user-operate">
          <el-button type="primary" @click="quit()">退出</el-button>
        </div>
      </header>
      <transition>
        <main v-show="showMain">
          <router-view></router-view>
        </main>
      </transition>
    </div>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        showMain: true,
        title: '首页',
        value: [],
        options: [{
            value: 'shouye',
            label: '首页'
          }, {
            value: 'shangpinguanli',
            label: '商品管理'
          },
          {
            value: 'yonghuguanli',
            label: '用户管理'
          },
          {
            value: 'qita',
            label: '其它',
            children: [{
              value: 'qita1',
              label: '其它页1'
            }, {
              value: 'qita2',
              label: '其它页2'
            }]
          }
        ]
      };
    },
    methods: {
      handleChange(value) {
        // console.log(value);
        this.showMain = false;
        setTimeout(() => {
          switch (value[0]) {
            case 'shouye': {
              this.title = '首页';
              this.$router.replace('/main/shouye');
              break;
            }
            case 'shangpinguanli': {
              this.title = '商品管理';
              this.$router.replace('/main/goodsmanage');
              break;
            }
            case 'yonghuguanli': {
              this.title = '用户管理';
              this.$router.replace('/main/usermanage');
              break;
            }
            case 'qita': {
              if (value[1] == 'qita1') {
                this.title = '其它1';
                this.$router.replace('/main/other1');
              }
              if (value[1] == 'qita2') {
                this.title = '其它2';
                this.$router.replace('/main/other2');
              }
              break;
            }
          }
          this.showMain = true;
        }, 600)
      },
      quit() {
        this.$router.replace('/login');
      }
    }
  };
</script>
<style scoped lang="less">
  #container {
    /* border: 1px solid blue; */
    height: 100%;
    display: flex;

    .left {
      margin: 5px;
      // height: 100%;
      background-color: #aa55ff;
      box-shadow: 3px 3px 5px #565656;
      width: 200px;
      color: white;
      padding-top: 25px;

      .demonstration {
        font-size: 25px;
        margin: 20px;
      }
    }

    .right {
      flex: 1;
      display: flex;
      flex-direction: column;

      header {
        margin: 5px;
        height: 100px;
        text-align: center;
        color: white;
        font-size: 30px;
        box-shadow: 3px 3px 5px #565656;
        background-color: #aa55ff;
        line-height: 100px;

        .head-img {
          width: 50px;
          height: 50px;
          background-color: blueviolet;
          border-radius: 50px;
          float: left;
          margin-top: 25px;
          margin-left: 30px;
          background-image: url('../assets/logo.png');
          background-size: 100% 100%;
        }

        .user-operate {
          float: right;
          margin-right: 30px;
        }
      }

      main {
        flex: 1;
        margin: 5px;
        background-color: #aa55ff;
        box-shadow: 3px 3px 5px #565656;
      }
    }
  }

  .v-enter {
    transform: translateX(-10px);
    opacity: 0;
  }

  .v-enter-active {
    transition-duration: 0.5s;
    transition-timing-function: linear;
  }

  .v-enter-to {
    transform: translateX(0px);
    opacity: 1;
  }

  .v-leave {
    transform: translateX(0px);
    opacity: 1;
  }

  .v-leave-active {
    transition-duration: 0.5s;
    transition-timing-function: linear;
  }

  .v-leave-to {
    transform: translateX(10px);
    opacity: 0;
  }
</style>
