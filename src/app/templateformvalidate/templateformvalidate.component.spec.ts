import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateformvalidateComponent } from './templateformvalidate.component';

describe('TemplateformvalidateComponent', () => {
  let component: TemplateformvalidateComponent;
  let fixture: ComponentFixture<TemplateformvalidateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TemplateformvalidateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TemplateformvalidateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
