import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PerspectiveViewComponent } from './perspective-view.component';

describe('PerspectiveViewComponent', () => {
  let component: PerspectiveViewComponent;
  let fixture: ComponentFixture<PerspectiveViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PerspectiveViewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PerspectiveViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
