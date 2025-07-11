import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PretImmobilierPage } from './pret-immobilier.page';

describe('PretImmobilierPage', () => {
  let component: PretImmobilierPage;
  let fixture: ComponentFixture<PretImmobilierPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(PretImmobilierPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
