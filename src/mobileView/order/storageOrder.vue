<template>
  <div class="storage">
    <el-card>
      <div class="head">
        <p>存储信息填写</p>
      </div>
      <el-form ref="storageForm" :model="storage">
        <el-form-item label="存储类型">
          <el-select v-model="storage.storageType">
            <el-option
              v-for="item in types"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="存储地域">
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
          <el-input v-model="storage.packageId"></el-input>
        </el-form-item>
        <el-form-item label="结束时间">
          <el-date-picker
            v-model="storage.endingTime"
            type="date"
            placeholder="结束时间">
          </el-date-picker>
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
      areas: [],
      packages: [],
      types: [{
        value: '普通',
        label: '普通'
      }, {
        value: '贵重',
        label: '贵重'
      }]
    }
  },
    created: function(){
      this.findAreas();
    },
  methods: {
    findAreas(){
      orderApi.findArea().then((res) => {
        console.log(res.data);
        for(let e of res.data){
          let area = {};
          area.label = e.address;
          area.value = e.id;
          console.log(area);
          this.areas.push(area);
        }
      }).catch((error) => {
        this.$message({
          type: 'error',
          message: `查询地域信息失败`
        })
      })
    },
    findPackage(){
      orderApi.findPackage(this.storage.areaId).then((res) => {
        for(let i = 0; i < res.data.length; i++){
          this.packages[i].label = res.data[i].id;
          this.packages[i].value = res.data[i].id;
        }
      }).catch((error) => {
        this.$message({
          type: 'error',
          message: `查询背包信息失败`
        })
      })
    },
    installParms(){
      // this.storage.userId = 1;
      this.storage.userId = this.$route.query.id;
      this.storage.startTime = new Date();
      this.storage.endingTime = new Date(this.storage.endingTime);
    },
    submit () {
      this.installParms();
      orderApi.saveStorage(this.storage).then((res) => {
        this.$message({
          type: 'success',
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
<style>
  .storage .el-card__body{
    background: hsla(0, 0%, 100%, .7);
  }
</style>
