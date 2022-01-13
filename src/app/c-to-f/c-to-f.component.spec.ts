import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CToFComponent } from './c-to-f.component';

describe('CToFComponent', () => {
  let component: CToFComponent;
  let fixture: ComponentFixture<CToFComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CToFComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CToFComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
