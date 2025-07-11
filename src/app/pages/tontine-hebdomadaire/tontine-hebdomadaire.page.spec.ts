import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TontineHebdomadairePage } from './tontine-hebdomadaire.page';

describe('TontineHebdomadairePage', () => {
  let component: TontineHebdomadairePage;
  let fixture: ComponentFixture<TontineHebdomadairePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(TontineHebdomadairePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
