/* tslint:disable:no-unused-variable */
import { async, TestBed } from '@angular/core/testing';
import { BandaListComponent } from './Banda-list.component';
describe('BandaListComponent', () => {
    let component;
    let fixture;
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [BandaListComponent]
        })
            .compileComponents();
    }));
    beforeEach(() => {
        fixture = TestBed.createComponent(BandaListComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=Banda-list.component.spec.js.map