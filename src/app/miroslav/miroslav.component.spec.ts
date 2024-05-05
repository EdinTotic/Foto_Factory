import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MiroslavComponent } from './miroslav.component';

describe('MiroslavComponent', () => {
  let component: MiroslavComponent;
  let fixture: ComponentFixture<MiroslavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MiroslavComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MiroslavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
