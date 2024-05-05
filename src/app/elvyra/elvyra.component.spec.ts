import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElvyraComponent } from './elvyra.component';

describe('ElvyraComponent', () => {
  let component: ElvyraComponent;
  let fixture: ComponentFixture<ElvyraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ElvyraComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ElvyraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
