import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SbEditComponent } from './sb-edit.component';

describe('SbEditComponent', () => {
  let component: SbEditComponent;
  let fixture: ComponentFixture<SbEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SbEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SbEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
