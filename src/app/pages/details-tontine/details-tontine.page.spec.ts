import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DetailsTontinePage } from './details-tontine.page';

describe('DetailsTontinePage', () => {
  let component: DetailsTontinePage;
  let fixture: ComponentFixture<DetailsTontinePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsTontinePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
