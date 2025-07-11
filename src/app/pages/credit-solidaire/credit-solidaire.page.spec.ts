import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CreditSolidairePage } from './credit-solidaire.page';

describe('CreditSolidairePage', () => {
  let component: CreditSolidairePage;
  let fixture: ComponentFixture<CreditSolidairePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(CreditSolidairePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
