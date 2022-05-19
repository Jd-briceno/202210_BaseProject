/* tslint:disable:no-unused-variable */
import { async, TestBed } from '@angular/core/testing';
import { BandasComponent } from './Bandas.component';
describe('BandasComponent', () => {
    let component;
    let fixture;
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [BandasComponent]
        })
            .compileComponents();
    }));
    beforeEach(() => {
        fixture = TestBed.createComponent(BandasComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=Bandas.component.spec.js.map