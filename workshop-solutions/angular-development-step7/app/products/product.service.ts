import { Injectable } from '@angular/core';

import { IProduct } from './product';

@Injectable()
export class ProductService {

    getProducts(): IProduct[] {
        return [
            {
				"productId": 1,
				"productName": "Python Programming",
				"productCode": "PRG400",
				"releaseDate": "March 2, 2016",
				"description": "Learn how to program in Python",
				"price": 1750,
				"starRating": 4.9,
				"imageUrl": "https://openclipart.org/image/300px/svg_to_png/248484/387.png"
			},
			{
				"productId": 2,
				"productName": "Ruby Programming",
				"productCode": "PRG500",
				"releaseDate": "August 19, 2017",
				"description": "Learn how to program in Ruby",
				"price": 1500,
				"starRating": 4.2,
				"imageUrl": "https://openclipart.org/image/300px/svg_to_png/173574/1354727531.png"
			},
			{
				"productId": 3,
				"productName": "Testing with Selenium",
				"productCode": "TLG700",
				"releaseDate": "May 25, 2017",
				"description": "Learn how to test with Selenium",
				"price": 1100,
				"starRating": 3.5,
				"imageUrl": "https://openclipart.org/image/300px/svg_to_png/263831/selenium.png"
			}
        ];
    }
}
