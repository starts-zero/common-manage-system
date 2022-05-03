<template>
  <div id="container">
    <div class="zouma">
      <el-carousel :interval="3000" type="card" height="250px" loop>
        <el-carousel-item v-for="item in img" :key="item"
          style="border: 1px solid #00aaff; box-shadow: 0px 0px 10px #4f4f4f;">
          <img :src="item" style="width: 100%; height: 100%;">
        </el-carousel-item>
      </el-carousel>
    </div>

    <div class="location">
      <div class="zhao">
        <div class="juzhong">
          <table border="0" cellspacing="0" cellpadding="0">
            <tr>
              <td>
                <label for="u_name">用户名：</label>
              </td>
              <td>
                <input type="text" id="u_name" v-model="u_name">
              </td>
            </tr>
            <tr>
              <td style="padding-top: 15px;">
                <label for="u_password">密码：</label>
              </td>
              <td style="padding-top: 15px;">
                <input type="password" id="u_password" v-model="u_password">
              </td>
            </tr>
            <tr>
              <td style="padding-top: 35px;">
                <button @click="openRegister()">注册</button>
              </td>
              <td style="padding-top: 35px;">
                <button @click="login()">登录</button>
              </td>
            </tr>
          </table>
        </div>
      </div>
      <div class="tip">
        <h3>tip：鼠标移进来</h3>
      </div>
    </div>

    <div class="register">
      <el-dialog title="注册用户" :visible.sync="dialogFormVisible">
        <el-form :model="form">
          <el-form-item label="用户名:" :label-width="formLabelWidth">
            <el-input v-model="form.name" autocomplete="off"></el-input>
            <span v-show="register_notify_name" style="color: red;">用户名可以由 小写 和 大写 字母 或 数字 组成的 五个字符！</span>
          </el-form-item>
          <el-form-item label="密码:" :label-width="formLabelWidth">
            <el-input v-model="form.password" autocomplete="off" type="password"></el-input>
            <span v-show="register_notify_password" style="color: red;">密码可以由 小写 和 大写 字母 或 数字 组成的 六个字符！</span>
          </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
          <el-button @click="dialogFormVisible = false">取 消</el-button>
          <el-button type="primary" @click="register()">确 定</el-button>
        </div>
      </el-dialog>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Login',
    data() {
      return {
        img: [require('../assets/zouma1.jpg'),
          require('../assets/zouma2.jpg'),
          require('../assets/zouma3.jpg'),
          require('../assets/zouma4.jpg'),
          require('../assets/zouma5.jpg'),
          require('../assets/zouma6.jpg')
        ],
        dialogFormVisible: false,
        formLabelWidth: '120px',
        form: {
          name: '',
          password: '',
          level: 'user'
        },
        u_name: '',
        u_password: '',
        register_notify_name: false,
        register_notify_password: false,
      }
    },
    watch: {
      'form.name'(val) {
        let regexp = /[a-zA-z0-9]{1,5}/g
        // console.log(val.match(regexp));
        let result = val.match(regexp);
        if (result == null || result.length >= 2) {
          this.register_notify_name = true;
        } else {
          this.register_notify_name = false;
        }
      },
      'form.password'(val) {
        let regexp = /[a-zA-z0-9]{1,6}/g
        // console.log(val.match(regexp));
        let result = val.match(regexp);
        if (result == null || result.length >= 2) {
          this.register_notify_password = true;
        } else {
          this.register_notify_password = false;
        }
      }
    },
    methods: {
      openRegister() {
        this.dialogFormVisible = true;
      },
      register() {
        if (this.form.name != '' && this.form.password != '') {
          let user = {
            name: this.form.name,
            password: this.form.password,
            level: this.form.level
          }
          let index = true;
          for (let item of this.$store.state.user) {
            if (item.name == user.name) {
              index = false;
              break;
            }
          }
          if (index) {
            this.$store.state.user.push(user);
            this.$message({
              message: '注册成功',
              type: 'success'
            })
            this.dialogFormVisible = false;
          } else {
            this.$message({
              message: '这个用户名好像已经有人注册了，不如再想一个？',
              type: 'warning'
            })
          }
        } else {
          this.$message({
            message: '信息补全哦！',
            type: 'warning'
          })
        }
      },
      login() {
        if (this.u_name != '' && this.u_password != '') {
          let temp = {
            name: this.u_name,
            password: this.u_password,
            level: 'user'
          }
          // console.log(temp);
          let index = false;
          for (let item of this.$store.state.user) {
            if (item.name == temp.name && item.password == temp.password) {
              index = true;
              break;
            }
          }
          if (index) {
            this.$message({
              message: '登录成功！',
              type: 'success'
            })
            this.$store.state.entryUser.name = temp.name;
            this.$store.state.entryUser.level = temp.level;
            this.$router.replace('/main/shouye');
          } else {
            this.$message({
              message: '找不到你输入信息！',
              type: 'warning'
            })
          }
        } else {
          this.$message({
            message: '好像有一项是忘了输入的？',
            type: 'warning'
          })
        }
      }
    }
  }
</script>

<style scoped lang="less">
  #container {
    height: 100%;
    // border: 1px solid red;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .zouma {
      width: 800px;
      // border: 1px solid red;
    }

    .location {
      background-color: #cafffc;
      box-shadow: 3px 3px 10px #5d6774;
      width: 600px;
      height: 300px;
      cursor: pointer;

      &:hover .zhao {
        transform: rotateZ(0deg);
        opacity: 1;
      }

      .tip {
        color: #5d6774;
        width: 30%;
        margin: auto;
        // border: 1px solid red;
      }

      .zhao {
        position: absolute;
        width: 600px;
        height: 300px;
        background-color: rgba(0, 0, 0, 0.3);
        opacity: 0;
        transform: rotateZ(-90deg);
        transition: 0.8s;
        transform-origin: 0% 0%;

        .juzhong {
          width: 50%;
          margin: auto;
          padding-top: 85px;

          td {
            height: 35px;
            text-align: center;
          }

          label {
            font-size: 20px;
            cursor: pointer;
          }

          input {
            height: 30px;
            font-size: 20px;
            border: none;
            background-color: transparent;
            border-bottom: 1px solid black;
            outline: none;
            transition: 0.4s;

            &:focus {
              box-shadow: 0px 0px 10px white;
              background-color: #ffffff;
              border: 1px solid #00aaff;
            }
          }

          button {
            background-color: #00aaff;
            width: 80px;
            height: 50px;
            border: none;
            font-size: 18px;
            cursor: pointer;
            transition: 0.4s;

            &:hover {
              color: white;
              border: 1px solid white;
              box-shadow: 0px 0px 10px white;
              transform: translateY(-10px);
            }
          }
        }
      }
    }
  }

  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }

  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
</style>
