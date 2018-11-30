<template>
    <div>
      <el-card>
        <div class="head">
          <p>寄送信息填写</p>
        </div>
        <el-form ref="sendingForm" :model="sending">
          <el-form-item label="寄送类型">
            <el-select v-model="sending.sendingType">
              <el-option
                v-for="item in types"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="寄送地址">
            <el-select v-model="sending.areaId">
              <el-option
                v-for="item in areas"
                :key="item.key"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="目的地址">
            <el-select v-model="sending.sending_addressId">
              <el-option
                v-for="item in areas"
                :key="item.key"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>
            <!--<el-input v-model="sending.address"></el-input>-->
            <!--<el-cascader
              expand-trigger="hover"
              :options="address"
              v-model="sending.address">
            </el-cascader>-->
          </el-form-item>
          <el-form-item label="收件人姓名">
            <el-input v-model="sending.addresseeName"></el-input>
          </el-form-item>
          <el-form-item label="收件人电话">
            <el-input v-model="sending.addresseeTel"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="submitSendingOrder">提交</el-button>
            <el-button type="primary" @click="resetSendingOrder">取消</el-button>
          </el-form-item>
        </el-form>
      </el-card>
    </div>
</template>

<script>
  import {orderApi} from "./order-api";

  export default {
  name: 'sendingOrder',
  data () {
    return {
      sending: {},
      areas: [{
        value: 1,
        label: '重庆巴南'
      }, {
        value: 2,
        label: '上海',
      }, {
        value: 3,
        label: '北京',
      }, {
        value: 4,
        label: '天津',
      }],
      types: [{
        value: '普通',
        label: '普通'
      }, {
        value: '快件',
        label: '快件'
      }, {
        value: '加急',
        label: '加急'
      }]
    }
  },
  methods: {
    installParms(){
      this.sending.userId = 1;
    },
    submitSendingOrder () {
      this.installParms();
      orderApi.saveSending(this.sending).then((res) => {
        this.$message({
          type: 'info',
          message: `寄送信息提交成功`
        })
      }).catch((error) => {
        this.$message({
          type: 'error',
          message: `寄送信息提交失败`
        })
      })
    },
    resetSendingOrder () {
      this.$router.push({
        path: '/login'
      })
    }
  }
}
</script>

<style scoped>

</style>
