import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NouriComponent } from './nouri.component';

describe('NouriComponent', () => {
  let component: NouriComponent;
  let fixture: ComponentFixture<NouriComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NouriComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NouriComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
