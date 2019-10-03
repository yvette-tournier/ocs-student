import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router} from '@angular/router';

@Injectable()
export class ProductDetailGuard implements CanActivate {
    constructor(private router: Router) {
    }

    canActivate(route: ActivatedRouteSnapshot): boolean {
        let id: number = +route.url[1].path;
        if (isNaN(id) || id < 1) {
            alert('Invalid product id: ' + route.url[1].path);
            this.router.navigate(['/products']);
            return false;
        }
        return true;
    }
}
