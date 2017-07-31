//get products
export const getProducts = ({ commit }) =>  {
	return axios.get('/api/products').then( (response) => {
		commit('setProducts', response.data.product)
		return Promise.resolve()
	})
}

//add product to cart
export const addProductToCart = ({ commit }, { product, quantity } ) => {
	return axios.post('/api/cart/add', {
		id : product.id,
		quantity: quantity
	}).then( (response)=> {
		console.log(response.data)
		commit('appendToCart', response.data.product)
	})
}

//get cart
export const getCart = ({ commit }) => {
	return axios.get('/api/cart').then( (response) => {
		console.log(response.data.product)
		commit('setCart', response.data.product)
		return Promise.resolve()
	})
}

//remove product from cart
export const removeProductFromCart = ({ commit }, rowId) => {
	return axios.delete(`/api/cart/delete/${rowId}`).then((response)=> {
		commit('removeFromCart', rowId)
	})
}

//remove all product in cart
export const clearCart = ({ commit }) => {
	commit('clearCart')
	return axios.delete('/api/cart/destroy')
}

