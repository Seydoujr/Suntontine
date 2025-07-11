import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TontineVoyagePage } from './tontine-voyage.page';

describe('TontineVoyagePage', () => {
  let component: TontineVoyagePage;
  let fixture: ComponentFixture<TontineVoyagePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(TontineVoyagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
