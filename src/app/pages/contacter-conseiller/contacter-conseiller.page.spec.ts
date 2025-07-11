import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ContacterConseillerPage } from './contacter-conseiller.page';

describe('ContacterConseillerPage', () => {
  let component: ContacterConseillerPage;
  let fixture: ComponentFixture<ContacterConseillerPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ContacterConseillerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
