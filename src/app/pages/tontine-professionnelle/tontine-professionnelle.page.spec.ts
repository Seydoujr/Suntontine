import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TontineProfessionnellePage } from './tontine-professionnelle.page';

describe('TontineProfessionnellePage', () => {
  let component: TontineProfessionnellePage;
  let fixture: ComponentFixture<TontineProfessionnellePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(TontineProfessionnellePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
