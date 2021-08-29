import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SbDialogComponent } from './sb-dialog.component';

describe('DialogComponent', () => {
  let component: SbDialogComponent;
  let fixture: ComponentFixture<SbDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SbDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SbDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
