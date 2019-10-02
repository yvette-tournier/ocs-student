import {Component} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
    selector: 'child-one',
    template: `
  Child One, reading parent route param.
    <b><code>Parent ID: {{ parentRouteId }}</code></b>
  `
})
export default class ChildOne {
    private sub: any;
    private parentRouteId: number;

    constructor(private router: Router,
                private route: ActivatedRoute) {
    }

    ngOnInit() {
        this.sub = this.router.routerState.parent(this.route)
            .params.subscribe(params => {
                this.parentRouteId = +params["id"];
            });
    }

    ngOnDestroy() {
        this.sub.unsubscribe();
    }
}
