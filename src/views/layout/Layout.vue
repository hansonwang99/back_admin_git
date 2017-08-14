<template>
    <div class="app-wrapper">
        <Leftbar class="sidebar-container"></Leftbar>
    </div>
</template>

<script>
  import Leftbar from '@/views/layout/Leftbar'

  export default {
    name: 'Layout',
    components: {
      Leftbar
    }
  }
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
    @import "src/styles/mixin.scss";
    .app-wrapper {
		@include clearfix;
		position: relative;
		height: 100%;
		width: 100%;

		.sidebar-container {
			transition: width 0.28s ease-out;
			width: 180px;
			height: 100%;
			position: fixed;
			top: 0;
			bottom: 0;
			left: 0;
			z-index: 1001;
            overflow-y: auto;
            // background-color: black;
 			&::-webkit-scrollbar {display:none}
		}

	}
</style>
