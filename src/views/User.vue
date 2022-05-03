<template>
  <div id="container">
    <div class="add-msg">
      <button @click="openDialog()">添加数据</button>
      <p style="margin-right: 80px;">tip:点击数据即可修改</p>
      <button @click="openDelete()">删除数据</button>
    </div>

    <div class="show">
      <table border="0" cellspacing="1" cellpadding="0" style="text-align: center;">
        <tr class="head">
          <th>用户名</th>
          <th>密码</th>
          <th>权限</th>
        </tr>
        <tr class="item" v-for="(item,index) in $store.state.user" :key="index" @click="modify(item,index)">
          <td>{{item.name}}</td>
          <td>{{item.password}}</td>
          <td>{{item.level}}</td>
        </tr>
      </table>
    </div>

    <div class="dialog">
      <el-dialog title="编辑用户信息" :visible.sync="dialogFormVisible">
        <el-form :model="form">
          <el-form-item label="用户名" :label-width="formLabelWidth">
            <el-input v-model="form.name" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="密码" :label-width="formLabelWidth">
            <el-input v-model="form.password" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="权限" :label-width="formLabelWidth">
            <el-select v-model="form.level">
              <el-option label="管理员" value="admin"></el-option>
              <el-option label="用户" value="user"></el-option>
              <el-option label="游客" value="visiter"></el-option>
            </el-select>
          </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
          <el-button @click="dialogFormVisible = false">取 消</el-button>
          <el-button type="primary" @click="addUser()">确 定</el-button>
        </div>
      </el-dialog>
    </div>

    <div class="delete-user" v-show="deleteVisible">
      <p>tip：点击勾选删除</p>
      <div class="delete-item" v-for="(item,index) in $store.state.user" :key="index">
        <input type="radio" :value="index" v-model="checkName" />
        <span>{{item.name}}</span>
      </div>
      <div class="delete-btn">
        <button @click="deleteVisible = false">取消</button>
        <button @click="shanchu()">删除</button>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'User',
    data() {
      return {
        dialogFormVisible: false,
        form: {
          name: 'ceshi',
          password: 'ceshi',
          level: 'visiter'
        },
        formLabelWidth: '120px',
        modifyOk: 0,
        modifyIndex: 0,
        checkName: -1,
        deleteVisible: false
      }
    },
    methods: {
      openDialog() {
        this.dialogFormVisible = true;
        this.form.name = '';
        this.form.password = '';
        this.form.level = '';
      },
      addUser() {
        // console.log(this.form);
        if (this.modifyOk == 1) {
          this.modifyOk = 0;
          this.$store.state.user[this.modifyIndex].name = this.form.name;
          this.$store.state.user[this.modifyIndex].password = this.form.password;
          this.$store.state.user[this.modifyIndex].level = this.form.level;
        } else {
          let temp = {
            name: this.form.name,
            password: this.form.password,
            level: this.form.level
          }
          this.$store.state.user.push(temp);
        }
        this.dialogFormVisible = false;
      },
      modify(item, index) {
        this.modifyOk = 1;
        this.modifyIndex = index;
        this.form.name = item.name;
        this.form.password = item.password;
        this.form.level = item.level;
        this.dialogFormVisible = true;
      },
      openDelete() {
        this.checkName = -1;
        this.deleteVisible = true;
      },
      shanchu() {
        // console.log(this.checkName);
        if (this.checkName != -1) {
          this.$store.state.user.splice(this.checkName, 1);
        }
        this.deleteVisible = false;
      }
    }
  }
</script>

<style scoped lang="less">
  #container {
    display: flex;
    flex-direction: column;

    .add-msg {
      margin: 5px;
      height: 50px;
      padding-top: 25px;
      padding-left: 30px;

      display: flex;

      button {
        margin-right: 30px;
        width: 80px;
        height: 50px;
        background-color: #00aaff;
        border: none;
        cursor: pointer;
        transition: 0.4s;

        &:hover {
          box-shadow: 0px 0px 10px white;
          border: 1px solid white;
          color: white;
          transform: translateY(-5px);
        }
      }
    }

    .show {
      margin: 10px;
      background-color: aliceblue;
      box-shadow: 3px 3px 5px #5e5e5e;

      table {
        width: 100%;
        cursor: pointer;
        table-layout: fixed;

        tr {
          height: 35px;

          td {
            width: 33.3%;
            white-space: nowrap;
            overflow: hidden;
          }
        }

        .head {
          background-color: #aaffff;
        }

        .item {
          &:hover {
            background-color: #55aaff;
          }
        }
      }
    }

    .delete-user {
      position: absolute;
      display: flex;
      flex-direction: column;
      background-color: aliceblue;
      box-shadow: 3px 3px 5px #5e5e5e;
      width: 40%;
      border: 5px double #00aaff;
      padding-left: 100px;
      padding-bottom: 15px;
      top: 10%;
      left: 30%;

      .delete-item {
        margin-bottom: 5px;

        input {
          width: 15px;
          height: 15px;
          cursor: pointer;
          margin-right: 5px;
        }

        &:hover {
          background-color: #00aaff;
        }
      }

      .delete-btn {
        button {
          margin-right: 30px;
          width: 50px;
          height: 30px;
          background-color: #00aaff;
          border: 1px solid #aa00ff;
          cursor: pointer;
          transition: 0.4s;

          &:hover {
            color: white;
            background-color: #37ff00;
          }
        }
      }
    }
  }
</style>
