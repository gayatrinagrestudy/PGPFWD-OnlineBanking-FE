import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PayeelistComponent } from './payeelist.component';

describe('PayeelistComponent', () => {
  let component: PayeelistComponent;
  let fixture: ComponentFixture<PayeelistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PayeelistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PayeelistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
