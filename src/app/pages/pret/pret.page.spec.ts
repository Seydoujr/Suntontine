import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PretPage } from './pret.page';

describe('PretPage', () => {
  let component: PretPage;
  let fixture: ComponentFixture<PretPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(PretPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
