//set products
export const setProducts = (state, products) => {
	state.products = products
}

export const appendToCart = (state, product) => {
	const existing = state.cart.find((item) => {
		return item.product.id === product.id
	})

	if (existing) {
		existing.qty++
	} else {
		state.cart.push({
			product,
			qty : 1
		})
	}
}
//set cart
export const setCart = (state, items) => {
	state.cart = items
}

//clear cart
//remove from cart
//appends to cart