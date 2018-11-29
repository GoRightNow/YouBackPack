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
        <el-form-item label="存储类型">
          <el-input v-model="storage.storageType"></el-input>
        </el-form-item>
        <el-form-item label="存储时间">
          <el-col :span="9">
            <el-date-picker
              v-model="storage.startTime"
              type="date"
              placeholder="开始时间"
              style="width: 100%;">
            </el-date-picker>
          </el-col>
          <el-col class="line" :span="2">-</el-col>
          <el-col :span="9">
            <el-date-picker
              v-model="storage.endingTime"
              type="date"
              placeholder="结束时间"
              style="width: 100%;">
            </el-date-picker>
          </el-col>
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
export default {
  name: 'storageOrder',
  data () {
    return {
      storage: {},
      areas: [{
        value: '重庆',
        label: '重庆',
        children: [{
          value: '巴南',
          label: '巴南'
        }, {
          value: 'aaa',
          label: 'aaa'
        }, {
          value: 'bbb',
          label: 'bbb'
        }]
      }, {
        value: '上海',
        label: '上海',
        children: [{
          value: 'ccc',
          label: 'ccc'
        }, {
          value: 'ddd',
          label: 'ddd'
        }, {
          value: 'eee',
          label: 'eee'
        }]
      }, {
        value: '北京',
        label: '北京'
      }, {
        value: '天津',
        label: '天津'
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
    submit () {
      this.$alert('存储信息提交成功', '提示', {
        confirmButtonText: '确定',
        callback: action => {
          this.$message({
            type: 'info',
            message: `action: ${action}`
          })
        }
      })
    },
    reset () {
      console.log('reset!')
    }
  }
}
</script>

<style scoped>

</style>
