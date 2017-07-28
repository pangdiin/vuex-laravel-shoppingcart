<template>
	<div class="row">
		<div class="col-sm-4" v-for="product in products">
			<product :product="product"></product>
		</div>
	</div>
</template>

<script>
	import { mapActions, mapGetters } from 'vuex'

	export default {
		 computed: {
		 	...mapGetters({
		 		products: 'products'
		 	})
		 },
		 methods: {
		 	...mapActions({
		 		getProducts : 'getProducts'
		 	})
		 },
		 mounted() {
		 	this.getProducts()
		 }
	}
</script>

<style scoped>
	
</style>