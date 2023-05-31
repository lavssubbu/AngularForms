import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormwithmodelComponent } from './formwithmodel.component';

describe('FormwithmodelComponent', () => {
  let component: FormwithmodelComponent;
  let fixture: ComponentFixture<FormwithmodelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormwithmodelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormwithmodelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
