import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactiveformvalidateComponent } from './reactiveformvalidate.component';

describe('ReactiveformvalidateComponent', () => {
  let component: ReactiveformvalidateComponent;
  let fixture: ComponentFixture<ReactiveformvalidateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReactiveformvalidateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReactiveformvalidateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
