//get products
export const getProducts = ({ commit }) =>  {
	return axios.get('/api/products').then( (response) => {
		commit('setProducts', response.data.product)
		return Promise.resolve()
	})
}

export const addProductToCart = ({ commit }, { product, quantity } ) => {
	return axios.post('/api/cart/add', {
		id : product.id,
		quantity: quantity
	}).then( (response)=> {
		console.log(response.data)
		commit('appendToCart', response.data.product)
	})
}

export const getCart = ({ commit }) => {
	return axios.get('/api/cart').then( (response) => {
		console.log(response.data.product)
		commit('setCart', response.data.product)
		return Promise.resolve()
	})
}

//add product to cart
//remove product from cart
//remove all product in cart
//get cart
