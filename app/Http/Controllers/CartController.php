<?php

namespace App\Http\Controllers;
use Cart;
use App\Product;

use Illuminate\Http\Request;

class CartController extends Controller
{
	public function index()
	{
        // $cart = Cart::content();

        // $collection = collect($cart);

        // $filtered = $collection->filter(function($item) {
        //     return $item;
        // })->values();

        // return response()->json([
        //     'product' => $filtered
        // ]);
	}

    public function store(Request $request)
    {
    	$product = Product::find($request->id);

    	$product = Cart::add($product->id, $product->name, 1 , $product->price);

    	return response()->json([
    		'product' =>  $product,
    	]);
    }

    public function update(Request $request)
    {
    	$cart = Cart::update($request->id, $request->qty);

    	return response()->json([
    		'product' => $cart,
    	]);
    }

    public function delete(Request $request)
    {
    	$cart = Cart::remove($request->id);

    	return response()->json([
    		'message' => 'Item has been removed to cart',
    	]);
    }

    public function destroy(Request $request)
    {
    	$cart = Cart::destroy();

    	return response()->json([
    		'message' => 'Cart has been remove',
    	]);
    }
}
