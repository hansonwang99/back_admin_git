<template>
    <div class="menu-wrapper">

        <template v-for="item in barItems">

			<router-link v-if="item.nodrop&&!item.hidden" :to="item.path">
				<el-menu-item :index="item.path"  class='submenu-title-noDropdown'>
					<span slot="title">{{item.name}}</span>
				</el-menu-item>
			</router-link>

			<el-submenu v-if="!item.hidden&&!item.nodrop" :index="item.name">
				<template slot="title">
					<span>{{item.name}}</span>
				</template>
				<template v-for="child in item.children" v-if='!child.hidden'>
					<LeftbarItems class='nest-menu' v-if='child.children&&child.children.length>0' :barItems='[child]'> </LeftbarItems>
					<router-link v-else :to="item.path+'/'+child.path">
						<el-menu-item :index="item.path+'/'+child.path">
							<span>{{child.name}}</span>
						</el-menu-item>
					</router-link>
				</template>
			</el-submenu>

		</template>
    </div>
</template>

<script>
  export default {
    name: 'LeftbarItems',
    props: {
      barItems: {
        type: Array
      }
    }
  }
</script>
