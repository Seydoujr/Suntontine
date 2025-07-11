import { ComponentFixture, TestBed } from '@angular/core/testing';
import { OffreLancementPage } from './offre-lancement.page';

describe('OffreLancementPage', () => {
  let component: OffreLancementPage;
  let fixture: ComponentFixture<OffreLancementPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(OffreLancementPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
