<template>
	<div class="mini-cart">
		<ul class="list-group" v-if="cart.length">
			<li class="list-group-item" v-for="item in cart">
				<a href="#" class="badge" @click.prevent="removeProductFromCart(item.
				rowId)">Remove</a>
				{{ item.qty }} x {{ item.name }} @ $ {{ item.price }}
			</li>
			<li class="list-group-item">
				<a href="#" @click.prevent="clearCart">Clear Cart</a>
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
		methods: {
			...mapActions({
				getCart: 'getCart',
				removeProductFromCart : 'removeProductFromCart',
				clearCart: 'clearCart'
			})
		},
		mounted() {
			this.getCart()
		}
	}
</script>