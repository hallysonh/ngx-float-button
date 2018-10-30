import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxFloatButtonComponent } from './ngx-float-button.component';

describe('NgxFloatButtonComponent', () => {
  let component: NgxFloatButtonComponent;
  let fixture: ComponentFixture<NgxFloatButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgxFloatButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxFloatButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
