<template>
  <div id="container">
    <div class="item" v-for="(item,index) in goods" :key="index" @click="choice(item,index)">
      <img :src="item.img" style="width: 50px;height: 50px;">
      <div class="msg">
        <h4>{{item.name}}</h4>
        <hr style="margin-right: 10px;">
        <p>￥：{{item.price}}</p>
      </div>
    </div>

    <div class="dialog">
      <el-dialog title="设置商品信息" :visible.sync="dialogFormVisible">
        <el-form :model="form">
          <el-form-item label="商品名称" :label-width="formLabelWidth">
            <el-input v-model="form.name" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="价格" :label-width="formLabelWidth">
            <el-input v-model="form.price" autocomplete="off"></el-input>
          </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
          <el-button @click="dialogFormVisible = false">取 消</el-button>
          <el-button type="primary" @click="modify()">确 定</el-button>
        </div>
      </el-dialog>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Goods',
    data() {
      return {
        goods: [{
            img: require('../assets/icon_goods.png'),
            name: '商品1',
            price: 1
          },
          {
            img: require('../assets/icon_goods.png'),
            name: '商品1',
            price: 1
          },
          {
            img: require('../assets/icon_goods.png'),
            name: '商品1',
            price: 1
          },
          {
            img: require('../assets/icon_goods.png'),
            name: '商品1',
            price: 1
          },
          {
            img: require('../assets/icon_goods.png'),
            name: '商品1',
            price: 1
          },
          {
            img: require('../assets/icon_goods.png'),
            name: '商品1',
            price: 1
          },
          {
            img: require('../assets/icon_goods.png'),
            name: '商品1',
            price: 1
          },
          {
            img: require('../assets/icon_goods.png'),
            name: '商品1',
            price: 1
          },
          {
            img: require('../assets/icon_goods.png'),
            name: '商品1',
            price: 1
          },
          {
            img: require('../assets/icon_goods.png'),
            name: '商品1',
            price: 1
          },
          {
            img: require('../assets/icon_goods.png'),
            name: '商品1',
            price: 1
          },
          {
            img: require('../assets/icon_goods.png'),
            name: '商品1',
            price: 1
          },
          {
            img: require('../assets/icon_goods.png'),
            name: '商品1',
            price: 1
          },
          {
            img: require('../assets/icon_goods.png'),
            name: '商品1',
            price: 1
          },
          {
            img: require('../assets/icon_goods.png'),
            name: '商品33',
            price: 33
          }
        ],
        dialogFormVisible: false,
        form: {
          name: '',
          price: 0
        },
        formLabelWidth: '120px',
        goodsIndex: 0
      }
    },
    methods: {
      choice(item, index) {
        this.dialogFormVisible = true;
        this.form.name = item.name;
        this.form.price = item.price;
        this.goodsIndex = index;
      },
      modify() {
        this.goods[this.goodsIndex].name = this.form.name;
        this.goods[this.goodsIndex].price = this.form.price;
        this.dialogFormVisible = false;
      }
    }
  }
</script>

<style scoped lang="less">
  #container {
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;

    .item {
      margin-left: 5px;
      margin-top: 5px;
      width: 150px;
      height: 150px;
      border-radius: 5px;
      background-color: aliceblue;
      box-shadow: 3px 3px 5px #585858;
      cursor: pointer;
      transition-duration: 0.3s;

      display: flex;
      justify-content: center;
      align-items: center;

      &:hover {
        transform: translateY(-5px);
      }

      .msg {
        flex: 1;
        margin-left: 10px;
      }
    }
  }
</style>
