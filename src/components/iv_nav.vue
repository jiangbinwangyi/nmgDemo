<template>
	<div>
		<ul>
			<li><router-link to="/video/list/"><Icon type="ios-arrow-back" /></router-link></li>
			<li><router-link :to="wd=='2D'?'/video/two/':'#'"><Icon type="md-refresh" /></router-link></li>
			<li><router-link to="#"><Icon type="ios-bluetooth" /></router-link></li>
			<li><router-link to="#"><Icon type="ios-body" /></router-link></li>
			<li><router-link to="#"><Icon type="md-bonfire" /></router-link></li>
			<li><router-link to="#"><Icon type="md-build" /></router-link></li>
			<li><router-link :to="wd=='2D'?'/video/two/':'/video/three/'"><strong v-text="wd"></strong></router-link></li>
			<li><router-link to="#"><Icon type="md-clipboard" /></router-link></li>
			<li><router-link to="#"><Icon type="ios-cog" /></router-link></li>
			<li><router-link to="#"><Icon type="md-construct" /></router-link></li>
		</ul>
	</div>
</template>

<script>
	export default{
		name: 'iv_nav',
		props: {
			wd: {
				default: '2D',
				type: String
			}
		}
	}
</script>

<style scoped="scoped">
	div{
		height: 100%;
	}
	ul{
		background: #3a4146;
		height: 100%;
	}
	li{
		display: block;
		padding: 8px 10px;
		font-size: 14px;
	}
	a{
		color: #fff;
	}
</style>