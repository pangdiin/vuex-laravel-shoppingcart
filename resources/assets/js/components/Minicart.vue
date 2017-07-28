<template>
	<div class="mini-cart">
		<ul class="list-group" v-if="cart.length > 0">
			<li class="list-group-item" v-for="item in cart">
				<a href="#" class="badge">Remove</a>
				{{ item.qty }} x {{ item.product.name }} @ $ {{ item.product.price }}
			</li>
			<li class="list-group-item">
				<a href="#">Clear Cart</a>
			</li>
		</ul>
		<p v-else>No items in cart</p>
	</div>
</template>

<script>
	import { mapGetters, mapActions } from 'vuex'
	export default {
		computed: {
			...mapGetters({
				cart : 'cart'
			})
		},
		// methods: {
		// 	...mapActions({
		// 		getCart: 'getCart'
		// 	})
		// },
		// mounted() {
		// 	this.getCart()
		// }
	}
</script>