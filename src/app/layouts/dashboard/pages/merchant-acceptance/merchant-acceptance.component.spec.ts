import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MerchantAcceptanceComponent } from './merchant-acceptance.component';

describe('MerchantAcceptanceComponent', () => {
  let component: MerchantAcceptanceComponent;
  let fixture: ComponentFixture<MerchantAcceptanceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MerchantAcceptanceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MerchantAcceptanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
