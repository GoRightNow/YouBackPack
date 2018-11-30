<template>
  <div>
    <el-card>
      <div class="head">
        <p>存储信息填写</p>
      </div>
      <el-form ref="storageForm" :model="storage">
        <el-form-item label="存储地域">
          <!--<el-cascader
            expand-trigger="hover"
            :options="areas"
            v-model="storage.area">
          </el-cascader>-->
          <el-select v-model="storage.areaId">
              <el-option
                      v-for="item in areas"
                      :key="item.key"
                      :label="item.label"
                      :value="item.value">
              </el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="背包编码">
          <el-select v-model="storage.packageId">
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
      packages: [{
        value: 1,
        label: '1'
      }, {
        value: 2,
        label: '2'
      }, {
        value: 4,
        label: '4'
      }, {
        value: 5,
        label: '5'
      }, {
        value: 7,
        label: '7'
      }, {
        value: 9,
        label: '9'
      }, {
        value: 11,
        label: '11'
      }]
    }
  },
  methods: {
    installParms(){
      this.storage.userId = 1;
      // this.storage.userId = this.$route.query.id;
      this.storage.startTime = new Date();
      this.storage.endingTime = new Date(this.storage.endingTime);
    },
    submit () {
      this.installParms();
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
        path: '/login'
      })
    }
  }
}
</script>

<style scoped>

</style>
