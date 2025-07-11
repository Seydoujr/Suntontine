import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HistoriquePagePage } from './historique-page.page';

describe('HistoriquePagePage', () => {
  let component: HistoriquePagePage;
  let fixture: ComponentFixture<HistoriquePagePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(HistoriquePagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
