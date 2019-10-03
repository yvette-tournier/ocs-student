import {Component, OnInit} from '@angular/core';
import {IProduct} from './product';
import {ActivatedRoute, Router} from '@angular/router';
import {ProductService} from './product.service';


@Component({
    templateUrl: 'app/products/product-detail.component.html'
})
export class ProductDetailComponent implements OnInit {
    pageTitle: string = 'ProductDetail';
    product: IProduct;

    constructor(private route: ActivatedRoute, private router: Router, private service: ProductService) {
    }

    ngOnInit(): void {
        let id = +this.route.snapshot.params['id'];
        this.service.getProductById(id)
            .subscribe(product => this.product = product, error => console.error(error));
    }

    onBack(): void {
        this.router.navigate(['/products']);
    }
}
