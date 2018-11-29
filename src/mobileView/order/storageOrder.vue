<template>
  <div>
    <div class="head">
      <h2>存储信息填写</h2>
    </div>
    <el-card>
      <el-form ref="storageForm" :model="storage">
        <el-form-item label="存储地域">
          <el-cascader
            expand-trigger="hover"
            :options="areas"
            v-model="storage.area">
          </el-cascader>
          <!--<el-select v-model="storage.area">
              <el-option
                      v-for="item in areas"
                      :key="item.key"
                      :label="item.label"
                      :value="item.value">
              </el-option>
          </el-select>-->
        </el-form-item>
        <el-form-item label="背包编码">
          <el-select v-model="storage.package">
            <el-option
              v-for="item in packages"
              :key="item.key"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="结束时间">
          <el-date-picker
            v-model="storage.endingTime"
            type="date"
            placeholder="结束时间">
          </el-date-picker>
        </el-form-item>
        <el-form-item label="存储类型">
          <el-input v-model="storage.storageType"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submit">提交</el-button>
          <el-button type="primary" @click="reset">取消</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script>
  import {orderApi} from "./order-api";

  export default {
  name: 'storageOrder',
  data () {
    return {
      storage: {},
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
      packages: [{
        value: '1',
        label: '1'
      }, {
        value: '2',
        label: '2'
      }, {
        value: '4',
        label: '4'
      }, {
        value: '5',
        label: '5'
      }, {
        value: '7',
        label: '7'
      }, {
        value: '9',
        label: '9'
      }, {
        value: '11',
        label: '11'
      }]
    }
  },
  methods: {
    installParms(){
      this.storage.userId = this.$route.query.id;
      this.storage.startTime = new Date();
    },
    submit () {
      orderApi.saveStorage(this.storage).then((res) => {
        this.$message({
          type: 'info',
          message: `存储信息提交成功`
        })
      }).catch((error) => {
        this.$message({
          type: 'error',
          message: `存储信息提交失败`
        })
      })
    },
    reset () {
      this.$router.push({
        path: '/login/login'
      })
    }
  }
}
</script>

<style scoped>

</style>
