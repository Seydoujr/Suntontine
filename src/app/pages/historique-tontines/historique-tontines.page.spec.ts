import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HistoriqueTontinesPage } from './historique-tontines.page';

describe('HistoriqueTontinesPage', () => {
  let component: HistoriqueTontinesPage;
  let fixture: ComponentFixture<HistoriqueTontinesPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(HistoriqueTontinesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
