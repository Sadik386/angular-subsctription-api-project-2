import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SmsSelectorComponent } from './sms-selector.component';

describe('SmsSelectorComponent', () => {
  let component: SmsSelectorComponent;
  let fixture: ComponentFixture<SmsSelectorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SmsSelectorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SmsSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
