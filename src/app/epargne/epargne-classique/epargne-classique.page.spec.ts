import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EpargneClassiquePage } from './epargne-classique.page';

describe('EpargneClassiquePage', () => {
  let component: EpargneClassiquePage;
  let fixture: ComponentFixture<EpargneClassiquePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(EpargneClassiquePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
