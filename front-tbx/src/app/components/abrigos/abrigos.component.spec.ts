import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AbrigosComponent } from './abrigos.component';

describe('AbrigosComponent', () => {
  let component: AbrigosComponent;
  let fixture: ComponentFixture<AbrigosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AbrigosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AbrigosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
