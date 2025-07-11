import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TontineFemmePage } from './tontine-femme.page';

describe('TontineFemmePage', () => {
  let component: TontineFemmePage;
  let fixture: ComponentFixture<TontineFemmePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(TontineFemmePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
