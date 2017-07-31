//set products
export const setProducts = (state, products) => {
	state.products = products
}

export const appendToCart = (state, product) => {
	const existing = state.cart.find((item) => {
		return item.id === product.id
	})

	if (existing) {
		existing.qty++
	} else {
		state.cart.push(product)
	}
	
}
//set cart
export const setCart = (state, items) => {
	state.cart = items
}

//clear cart
//remove from cart
export const removeFromCart = (state, rowId) => {

	state.cart = state.cart.filter((item) => {
		return item.rowId !== rowId
	})
}
//clear all cart
export const clearCart = (state) => {
	return state.cart = []
}
