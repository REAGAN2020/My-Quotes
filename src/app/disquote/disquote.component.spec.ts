import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisquoteComponent } from './disquote.component';

describe('DisquoteComponent', () => {
  let component: DisquoteComponent;
  let fixture: ComponentFixture<DisquoteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisquoteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DisquoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
