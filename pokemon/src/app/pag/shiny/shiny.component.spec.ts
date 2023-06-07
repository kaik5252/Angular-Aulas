import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShinyComponent } from './shiny.component';

describe('ShinyComponent', () => {
  let component: ShinyComponent;
  let fixture: ComponentFixture<ShinyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShinyComponent]
    });
    fixture = TestBed.createComponent(ShinyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
