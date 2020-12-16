<!--
 * @Author: Jack
 * @Date: 2019-04-04 22:12:42
 * @LastEditors: Jack
 * @LastEditTime: 2020-12-16 13:39:53
 * @Description: 
 -->
<template>
  <div class="home-container">
    home page
    <page />
  </div>
</template>

<script>
import { ipcRenderer } from 'electron'
import { TEST_CHANNEL } from 'src/main/channel/const'
import page from '@/views/404.vue'
export default {
  name: 'Home',
  components: {
    page
  },
  mounted() {
    ipcRenderer.on(TEST_CHANNEL, (event, arg) => {
      console.log('Main sent data', arg)
    })

    ipcRenderer.send(TEST_CHANNEL)
  }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped></style>
