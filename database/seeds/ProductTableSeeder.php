<?php

use Illuminate\Database\Seeder;
use Faker\Factory as Faker;
use App\Product;

class ProductTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
    	$faker = Faker::create();

        foreach (range(1, 30) as $product) {
        	Product::create([
        		'name'	=>	$faker->word,
        		'qty'	=>	$faker->numberBetween(100,1000),
        		'price'	=>	$faker->numberBetween(40, 100),
        		'description'	=>	$faker->sentence,
        		'image'			=>	$faker->imageUrl('300', '400')
        	]);
        }
    }
}
        