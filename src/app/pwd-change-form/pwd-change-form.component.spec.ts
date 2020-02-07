import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PwdChangeFormComponent } from './pwd-change-form.component';

describe('PwdChangeFormComponent', () => {
  let component: PwdChangeFormComponent;
  let fixture: ComponentFixture<PwdChangeFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PwdChangeFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PwdChangeFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
