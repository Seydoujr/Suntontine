import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EpargneObjectifsPage } from './epargne-objectifs.page';

describe('EpargneObjectifsPage', () => {
  let component: EpargneObjectifsPage;
  let fixture: ComponentFixture<EpargneObjectifsPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(EpargneObjectifsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
