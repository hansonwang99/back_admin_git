<template>
    <el-menu theme="dark" default-active="2" class="el-menu-vertical-demo" >
        <LeftbarItems></LeftbarItems>
    </el-menu>
</template>

<script>
  import LeftbarItems from './LeftbarItems'

  export default {
    components: {
      LeftbarItems
    }
  }
</script>