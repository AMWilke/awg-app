import { Component, Input, OnInit } from '@angular/core';
import { Meta } from '../core-models/meta.model';

@Component({
    selector: 'awg-footer',
    templateUrl: './footer.component.html',
    styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
    @Input() meta: Meta;

    constructor() { }

    ngOnInit() { }

}