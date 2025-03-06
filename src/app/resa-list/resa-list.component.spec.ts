import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResaListComponent } from './resa-list.component';

describe('ResaListComponent', () => {
  let component: ResaListComponent;
  let fixture: ComponentFixture<ResaListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ResaListComponent]
    });
    fixture = TestBed.createComponent(ResaListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
