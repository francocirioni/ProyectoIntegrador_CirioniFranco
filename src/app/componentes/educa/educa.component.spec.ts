import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EducaComponent } from './educa.component';

describe('EducaComponent', () => {
  let component: EducaComponent;
  let fixture: ComponentFixture<EducaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EducaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EducaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
