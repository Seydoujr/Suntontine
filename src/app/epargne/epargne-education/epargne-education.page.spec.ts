import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EpargneEducationPage } from './epargne-education.page';

describe('EpargneEducationPage', () => {
  let component: EpargneEducationPage;
  let fixture: ComponentFixture<EpargneEducationPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(EpargneEducationPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
