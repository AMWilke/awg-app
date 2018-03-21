import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
    selector: 'awg-source-evaluation',
    templateUrl: './source-evaluation.component.html',
    styleUrls: ['./source-evaluation.component.css']
})
export class SourceEvaluationComponent implements OnInit {
    @Output() openModalRequest: EventEmitter<string> = new EventEmitter();
    @Output() scrollRequest: EventEmitter<any> = new EventEmitter();

    showPanel: boolean;

    constructor() { }

    ngOnInit() {
    }

    openModal(identifier: string) {
        this.openModalRequest.emit(identifier);
    }

    scrollTo(id: string) {
        this.scrollRequest.emit(id);
    }

    togglePanel(): boolean {
        return this.showPanel = !this.showPanel;
    }

}