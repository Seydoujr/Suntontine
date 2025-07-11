import { ComponentFixture, TestBed } from '@angular/core/testing';
import { OuvrirCompteEpargnePage } from './ouvrir-compte-epargne.page';

describe('OuvrirCompteEpargnePage', () => {
  let component: OuvrirCompteEpargnePage;
  let fixture: ComponentFixture<OuvrirCompteEpargnePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(OuvrirCompteEpargnePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
