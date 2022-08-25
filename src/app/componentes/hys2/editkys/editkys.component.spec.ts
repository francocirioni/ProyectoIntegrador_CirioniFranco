import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditkysComponent } from './editkys.component';

describe('EditkysComponent', () => {
  let component: EditkysComponent;
  let fixture: ComponentFixture<EditkysComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditkysComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditkysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
