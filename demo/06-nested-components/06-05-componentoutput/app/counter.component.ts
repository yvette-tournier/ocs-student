import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
    selector: 'app-counter',
    templateUrl: 'app/counter.component.html'
})
export class CounterComponent {
    count = 0;

    @Output() resultChanged = new EventEmitter<number>();

    increment() {
        this.count++;
        this.resultChanged.emit(this.count);
    }
}
