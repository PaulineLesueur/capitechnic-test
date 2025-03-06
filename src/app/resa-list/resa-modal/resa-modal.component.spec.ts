import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResaModalComponent } from './resa-modal.component';

describe('ResaModalComponent', () => {
  let component: ResaModalComponent;
  let fixture: ComponentFixture<ResaModalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ResaModalComponent]
    });
    fixture = TestBed.createComponent(ResaModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
