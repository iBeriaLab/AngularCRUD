import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-stat-box',
    templateUrl: './stat-box.component.html',
    styleUrls: ['./stat-box.component.scss']
})
export class StatBoxComponent implements OnInit {
    @Input() bgClass: string;
    @Input() url: string;
    @Input() icon: string;
    @Input() count: number;
    @Input() label: string;
    @Input() data: number;
    @Output() event: EventEmitter<any> = new EventEmitter();

    constructor() { }

    ngOnInit() {}

}
