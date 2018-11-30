<template>
    <div>
      <el-header>
        <i class="el-icon-arrow-left" @click="backToLogin"></i>
        <span>选择业务</span>
      </el-header>
      <el-main>
        <el-card>
          <el-button @click="toStorage">存储物品</el-button>
          <el-button @click="toSending">寄送物品</el-button>
        </el-card>
      </el-main>
    </div>
</template>

<script>
    export default {
        name: "chooseBusiness",
      data() {
          return {

          }
      },
      methods: {
          backToLogin(){
            this.$router.push({
              path: '/login'
            })
          },
        toStorage(){
            this.$router.push({
              path: '/mobileView/order/storageOrder'
            })
        },
        toSending(){
            this.$router.push({
              path: '/mobileView/order/sendingOrder'
            })
        }
      }
    }
</script>

<style scoped>

</style>
