import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PretRapidePage } from './pret-rapide.page';

describe('PretRapidePage', () => {
  let component: PretRapidePage;
  let fixture: ComponentFixture<PretRapidePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(PretRapidePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
