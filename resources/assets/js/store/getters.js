//products
export const products = (state) => {
	return state.products
}
//cart
export const cart = (state) => {
	return state.cart
}
//cart item count
export const cartItemCount = (state) => {
	return state.cart.length
}

export const cartTotal = (state) => {
	return state.cart.reduce((sum, value) => {
		return sum + value.price * value.qty
	}, 0).toFixed(2)
}

export const clearCart = (state) => {
	return state.cart = []
}
//cart total