import {Injectable} from '@angular/core';
import {IProduct} from './product';
import {Http, Response} from '@angular/http';
import {Observable} from '../../node_modules/rxjs/Observable';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/filter';

@Injectable()
export class ProductService {
    private productUrl = 'api/products/products.json';

    constructor(private http: Http) {
    }

    getProducts(): Observable<IProduct[]> {

        return this.http.get(this.productUrl)
            .map(response => <IProduct[]>response.json())
            .catch(this.handleError);
    }

    getProductById(id: number): Observable<IProduct> {
        return this.getProducts()
            .flatMap(products => products)
            .filter(product => id === product.productId)
            .catch(this.handleError);
    }

    private handleError(error: Response) {
        console.error(error);
        return Observable.throw(error.json().error || 'server error');
    }
}
