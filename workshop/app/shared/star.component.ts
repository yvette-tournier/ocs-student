import {Component, EventEmitter, Input, OnChanges, Output} from '@angular/core';


@Component({
    selector: 'rating-star',
    templateUrl: 'app/shared/star.component.html',
    styleUrls: ['app/shared/star.component.css']
})
export class StarComponent implements OnChanges {
    ratingWidth: number;
    starWidth: number = 14;
    starGap: number = 4;
    fiveStarWidth: number = 5 * this.starWidth + 4 * this.starGap;


    @Input() rating: number;

    @Output() ratingClicked: EventEmitter<string> = new EventEmitter<string>();

    ngOnChanges(): void {
        this.ratingWidth = this.rating * this.starWidth + Math.trunc(this.rating) * this.starGap;
    }

    onClick(): void {
        this.ratingClicked.emit(`The rating ${this.rating} was clicked`);
    }
}
