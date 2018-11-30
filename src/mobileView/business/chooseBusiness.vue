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
            id: ''
          }
      },
      // created: function() {
      //     this.id = this.$route.query.id;
      // },
      methods: {
          backToLogin(){
            this.$router.push({
              path: '/login'
            })
          },
        toStorage(){
            this.$router.push({
              path: '/mobileView/order/storageOrder',
              query: {
                id: this.$route.query.id
              }
            })
        },
        toSending(){
            this.$router.push({
              path: '/mobileView/order/sendingOrder',
              query: {
                id: this.$route.query.id
              }
            })
        }
      }
    }
</script>

<style scoped>

</style>
