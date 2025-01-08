import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WcHomeComponent } from './wc-home.component';

describe('WcHomeComponent', () => {
  let component: WcHomeComponent;
  let fixture: ComponentFixture<WcHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WcHomeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WcHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
