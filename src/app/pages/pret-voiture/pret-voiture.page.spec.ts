import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PretVoiturePage } from './pret-voiture.page';

describe('PretVoiturePage', () => {
  let component: PretVoiturePage;
  let fixture: ComponentFixture<PretVoiturePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(PretVoiturePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
