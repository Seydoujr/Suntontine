import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EpargneRetraitePage } from './epargne-retraite.page';

describe('EpargneRetraitePage', () => {
  let component: EpargneRetraitePage;
  let fixture: ComponentFixture<EpargneRetraitePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(EpargneRetraitePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
