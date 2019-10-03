import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';

import {ProductListComponent} from './product-list.component';
import {ProductDetailGuard} from './product-guard.service';
import {ProductDetailComponent} from './product-detail.component';
import {ProductFilterPipe} from './product-filter.pipe';
import {ProductService} from './product.service';
import {SharedModule} from '../shared/shared.module';


@NgModule({
    imports: [
        SharedModule,
        RouterModule.forChild([
            {path: 'products', component: ProductListComponent},
            {
                path: 'product/:id',
                canActivate: [ProductDetailGuard],
                component: ProductDetailComponent
            }])],
    providers: [
        ProductService,
        ProductDetailGuard],
    declarations: [
        ProductListComponent,
        ProductDetailComponent,
        ProductFilterPipe]
})
export class ProductModule {
}
