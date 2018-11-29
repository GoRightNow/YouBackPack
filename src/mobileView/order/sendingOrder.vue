<template>
    <div>
      <div class="head">
        <h2>寄送信息填写</h2>
      </div>
      <el-card>
        <el-form ref="sendingForm" :model="sending">
          <el-form-item label="寄送类型">
            <el-select v-model="sending.type">
              <el-option
                v-for="item in types"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="寄送地址">
            <el-cascader
              expand-trigger="hover"
              :options="areas"
              v-model="sending.area">
            </el-cascader>
          </el-form-item>
          <el-form-item label="目的地址">
            <el-input v-model="sending.address"></el-input>
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
export default {
  name: 'sendingOrder',
  data () {
    return {
      sending: {},
      areas: [{
        value: '重庆',
        label: '重庆',
        children: [{
          value: '1',
          label: '巴南'
        }, {
          value: '2',
          label: 'aaa'
        }, {
          value: '3',
          label: 'bbb'
        }]
      }, {
        value: '上海',
        label: '上海',
        children: [{
          value: '4',
          label: 'ccc'
        }, {
          value: '5',
          label: 'ddd'
        }, {
          value: '6',
          label: 'eee'
        }]
      }, {
        value: '北京',
        label: '北京',
        children: [{
          value: '7',
          label: 'fff'
        }]
      }, {
        value: '天津',
        label: '天津',
        children: [{
          value: '8',
          label: 'ggg'
        }]
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
    submitSendingOrder () {

    },
    resetSendingOrder () {

    }
  }
}
</script>

<style scoped>

</style>
