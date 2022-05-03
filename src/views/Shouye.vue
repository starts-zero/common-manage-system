<template>
  <div id="container">

    <div class="up">
      <div class="head-img">
        <div class="head-up">
          <img :src="userMsg.headImg" style="width: 100px;">
          <div class="user-msg">
            <h3>{{userMsg.username}}</h3>
            <p>{{userMsg.userlevel}}</p>
          </div>
        </div>
        <hr>
        <div class="login-msg">
          <h3>欢迎回来！</h3>
        </div>
      </div>

      <div class="shouru-box">
        <div class="item" v-for="(item,index) in getMoney" :key="index">
          <img :src="getMoneyIcon">
          <div class="money">
            <h3>￥：{{item}}</h3>
            <p>这又是什么收入呢！</p>
          </div>
        </div>
      </div>
    </div>

    <div class="down">
      <div id="chart1"></div>
      <div id="chart2"></div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Shouye',
    data() {
      return {
        userMsg: {
          headImg: require('../assets/logo.png'),
          username: 'Admin',
          userlevel: '超级管理员'
        },
        getMoneyIcon: require('../assets/icon.png'),
        getMoney: [456, 123, 456, 456, 123, 456]
      }
    },
    methods: {
      createChart1() {
        var chart1 = this.$echarts.init(document.getElementById('chart1'));
        chart1.setOption({
          title: {
            text: '折线图'
          },
          tooltip: {
            trigger: 'axis'
          },
          legend: {
            data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
          },
          grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
          },
          xAxis: {
            data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
          },
          yAxis: {
            type: 'value'
          },
          series: [{
              name: '衬衫',
              type: 'line',
              stack: 'total',
              data: [5, 20, 36, 10, 10, 20, 8]
            },
            {
              name: '羊毛衫',
              type: 'line',
              stack: 'total',
              data: [25, 18, 10, 12, 18, 5, 7]
            },
            {
              name: '雪纺衫',
              type: 'line',
              stack: 'total',
              data: [5, 8, 5, 6, 4, 3, 0]
            },
            {
              name: '裤子',
              type: 'line',
              stack: 'total',
              data: [10, 18, 15, 16, 14, 13, 10]
            },
            {
              name: '高跟鞋',
              type: 'line',
              stack: 'total',
              data: [11, 7, 2, 16, 4, 13, 10]
            },
            {
              name: '袜子',
              type: 'line',
              stack: 'total',
              data: [5, 8, 5, 6, 4, 3, 0]
            }
          ]
        });
      },
      createChart2() {
        var chart2 = this.$echarts.init(document.getElementById('chart2'));
        chart2.setOption({
          title: {
            text: '饼图',
            subtext: '销售比例',
            left: 'center'
          },
          tooltip: {
            trigger: 'item'
          },
          legend: {
            data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋'],
            orient: 'vertical',
            left: 'left'
          },
          series: [{
            name: 'Access From',
            type: 'pie',
            radius: '50%',
            data: [{
                value: 1048,
                name: '衬衫'
              },
              {
                value: 735,
                name: '羊毛衫'
              },
              {
                value: 580,
                name: '雪纺衫'
              },
              {
                value: 484,
                name: '裤子'
              },
              {
                value: 300,
                name: '高跟鞋'
              },
              {
                value: 600,
                name: '袜子'
              }
            ],
            emphasis: {
              itemStyle: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: 'rgba(0, 0, 0, 0.5)'
              }
            }
          }]
        });
      }
    },
    mounted() {
      this.createChart1();
      this.createChart2();
      this.userMsg.username = this.$store.state.entryUser.name;
      this.userMsg.userlevel = this.$store.state.entryUser.level;
    }
  }
</script>

<style lang="less" scoped>
  #container {
    // border: 1px solid red;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;

    .up {
      // border: 1px solid red;
      display: flex;
    }

    .head-img {
      height: 200px;
      width: 300px;
      padding: 10px;
      margin: 10px;
      background-color: aliceblue;
      box-shadow: 3px 3px 5px #585858;

      .head-up {
        display: flex;

        img {
          margin: 10px;
        }

        .user-msg {
          margin: 10px;
        }
      }

      .login-msg {
        margin: 10px;
      }
    }

    .shouru-box {
      margin: 10px;
      margin-left: 0px;
      flex: 1;

      display: grid;
      grid-template-rows: repeat(2, 110px);
      grid-template-columns: repeat(3, 33.3%);

      .item {
        margin: 5px;
        margin-top: 0px;
        margin-left: 0px;
        background-color: aliceblue;
        box-shadow: 3px 3px 5px #585858;

        display: flex;

        img {
          margin: 10px;
        }

        .money {
          line-height: 25px;
        }
      }
    }

    .down {
      flex: 1;
      // border: 1px solid red;
      display: flex;

      #chart1,
      #chart2 {
        flex: 1;
        // border: 1px solid blue;
        background-color: aliceblue;
        box-shadow: 3px 3px 5px #585858;
        margin: 5px;
        margin-top: 0px;
      }
    }
  }
</style>
