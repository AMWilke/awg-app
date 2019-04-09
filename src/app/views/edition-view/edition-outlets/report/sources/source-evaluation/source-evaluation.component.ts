import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
    selector: 'awg-source-evaluation',
    templateUrl: './source-evaluation.component.html',
    styleUrls: ['./source-evaluation.component.css']
})
export class SourceEvaluationComponent implements OnInit {
    @Output()
    openModalRequest: EventEmitter<string> = new EventEmitter();
    @Output()
    scrollRequest: EventEmitter<any> = new EventEmitter();

    showEvaluationPanel = true;

    constructor() {}

    ngOnInit() {}

    openModal(identifier: string) {
        this.openModalRequest.emit(identifier);
    }

    togglePanel(): boolean {
        return (this.showEvaluationPanel = !this.showEvaluationPanel);
    }
}