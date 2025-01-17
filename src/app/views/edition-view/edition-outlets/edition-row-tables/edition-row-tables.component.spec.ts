import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DebugElement } from '@angular/core';
import { RouterTestingModule } from '@angular/router/testing';

import { ReplaySubject } from 'rxjs';
import Spy = jasmine.Spy;

import { expectSpyCall } from '@testing/expect-helper';

import { EditionService } from '@awg-views/edition-view/services';

import { EditionRowTablesComponent } from './edition-row-tables.component';
import { EditionWork } from '@awg-views/edition-view/models';

describe('EditionRowTablesComponent (DONE)', () => {
    let component: EditionRowTablesComponent;
    let fixture: ComponentFixture<EditionRowTablesComponent>;
    let compDe: DebugElement;

    let editionServiceUpdateIsRowTablesViewSpy: Spy;
    let editionServiceClearIsRowTablesViewSpy: Spy;

    let mockEditionService: Partial<EditionService>;
    let mockIsRowTableViewSubject: ReplaySubject<boolean>;

    beforeEach(async () => {
        mockIsRowTableViewSubject = new ReplaySubject<boolean>(1);

        // Mock edition service
        mockEditionService = {
            updateIsRowTableView: (isView: boolean): void => mockIsRowTableViewSubject.next(isView),
            clearIsRowTableView: (): void => mockIsRowTableViewSubject.next(null),
        };

        await TestBed.configureTestingModule({
            imports: [RouterTestingModule],
            declarations: [EditionRowTablesComponent],
            providers: [{ provide: EditionService, useValue: mockEditionService }],
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(EditionRowTablesComponent);
        component = fixture.componentInstance;
        compDe = fixture.debugElement;

        mockEditionService = TestBed.inject(EditionService);

        // Spies on component functions
        // `.and.callThrough` will track the spy down the nested describes, see
        // https://jasmine.github.io/2.0/introduction.html#section-Spies:_%3Ccode%3Eand.callThrough%3C/code%3E
        editionServiceUpdateIsRowTablesViewSpy = spyOn(mockEditionService, 'updateIsRowTableView').and.callThrough();
        editionServiceClearIsRowTablesViewSpy = spyOn(mockEditionService, 'clearIsRowTableView').and.callThrough();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    describe('BEFORE initial data binding', () => {
        it('... should have rowTablesData', () => {
            expect(component.rowTablesData).toBeDefined();
        });

        it('... should not have called EditionService', () => {
            expectSpyCall(editionServiceUpdateIsRowTablesViewSpy, 0);
        });
    });

    describe('AFTER initial data binding', () => {
        beforeEach(() => {
            // Trigger initial data binding
            fixture.detectChanges();
        });

        it('... should have updated IsRowTableViewFlag (via EditionService)', () => {
            expectSpyCall(editionServiceUpdateIsRowTablesViewSpy, 1, true);
        });

        describe('#ngOnDestroy', () => {
            it('... should have cleared isRowTableView$ on destroy (via EditionService)', () => {
                component.ngOnDestroy();

                expectSpyCall(editionServiceClearIsRowTablesViewSpy, 1);
            });
        });
    });
});
