import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiretivasListComponent } from './diretivas-list.component';

describe('DiretivasListComponent', () => {
  let component: DiretivasListComponent;
  let fixture: ComponentFixture<DiretivasListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DiretivasListComponent]
    });
    fixture = TestBed.createComponent(DiretivasListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
