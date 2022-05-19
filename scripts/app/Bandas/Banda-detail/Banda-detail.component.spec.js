/* tslint:disable:no-unused-variable */
import { async, TestBed } from '@angular/core/testing';
import { BandaDetailComponent } from './Banda-detail.component';
describe('BandaDetailComponent', () => {
    let component;
    let fixture;
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [BandaDetailComponent]
        })
            .compileComponents();
    }));
    beforeEach(() => {
        fixture = TestBed.createComponent(BandaDetailComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=Banda-detail.component.spec.js.map