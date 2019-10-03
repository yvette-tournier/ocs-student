import {Component, OnInit} from '@angular/core';
import {IProduct} from './product';
import {ProductService} from './product.service';

@Component({
    selector: 'pm-products',
    templateUrl: 'product-list.component.html',
    styleUrls: ['product-list.component.css'],
    moduleId: module.id
})
export class ProductListComponent implements OnInit {

    pageTitle: string = 'Product List'
    imageWidth: number = 75;
    imageMargin: number = 2;
    showImage: boolean = false;
    listFilter: string = '';

    products: IProduct[];

    constructor(private productService: ProductService) {
    }

    toggleImage(): void {
        this.showImage = !this.showImage;
    }

    ngOnInit(): void {
        this.productService.getProducts()
            .subscribe(products => this.products = products,  error => console.error(error));
    }

    onRatingClicked(message: string): void {
        this.pageTitle = 'product list ' + message;
    }
}
