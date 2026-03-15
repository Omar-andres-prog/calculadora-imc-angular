import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImcForm } from './imc-form';

describe('ImcForm', () => {
  let component: ImcForm;
  let fixture: ComponentFixture<ImcForm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ImcForm],
    }).compileComponents();

    fixture = TestBed.createComponent(ImcForm);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
