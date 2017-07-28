<template>
	<div class="thumbnail">
		<img :src="product.image" :alt="product.image">
		<div class="caption">
			<a href="#">{{ product.name }}</a> ${{ product.price }}
			<p>{{ product.description }}</p>
			<a href="#" class="btn btn-default" @click.prevent="addToCart">Add to cart</a>
		</div>
	</div>
</template>

<script>
	import { mapActions } from 'vuex'

	export default {
		data() {
			return {
				qty: 1,
			}
		},
		props: ['product'],
		methods: {
			...mapActions({
				addProductToCart : 'addProductToCart'
			}),
			addToCart() {
				this.addProductToCart({
					product: this.product,
					quantity : this.qty 
				})
			}
		}
	}
</script>

<style>
	.thumbnail img {
		width: 100%;
	}
</style>