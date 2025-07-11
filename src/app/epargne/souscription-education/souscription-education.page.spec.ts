import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SouscriptionEducationPage } from './souscription-education.page';

describe('SouscriptionEducationPage', () => {
  let component: SouscriptionEducationPage;
  let fixture: ComponentFixture<SouscriptionEducationPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(SouscriptionEducationPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
