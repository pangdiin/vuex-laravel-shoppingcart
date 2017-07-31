<?php

namespace App\Http\Controllers;

use App\Product;
use Cart;
use Illuminate\Http\Request;

class ProductController extends Controller
{
    public function index()
    {
    	// Cart::destroy();

    	$product = Product::take(10)->get();

    	return response()->json([
    		'product' => $product
    	]);
    }
}
