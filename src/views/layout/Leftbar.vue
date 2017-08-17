<template>
    <el-menu theme="dark" default-active="2" class="el-menu-vertical-demo" >
        <LeftbarItems :barItems='permission_routers'></LeftbarItems>
    </el-menu>
</template>

<script>
  import { mapGetters } from 'vuex'
  import LeftbarItems from './LeftbarItems'

  export default {
    components: {
      LeftbarItems
    },
    computed: {
      ...mapGetters([
        'permission_routers'
      ])
    }
  }
</script>