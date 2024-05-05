import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EdinComponent } from './edin.component';

describe('EdinComponent', () => {
  let component: EdinComponent;
  let fixture: ComponentFixture<EdinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EdinComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EdinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
