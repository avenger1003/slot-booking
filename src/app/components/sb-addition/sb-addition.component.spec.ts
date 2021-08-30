import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SbAdditionComponent } from './sb-addition.component';

describe('SbAdditionComponent', () => {
  let component: SbAdditionComponent;
  let fixture: ComponentFixture<SbAdditionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SbAdditionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SbAdditionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
