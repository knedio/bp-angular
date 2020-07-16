import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicRowComponent } from './dynamic-row.component';

describe('DynamicRowComponent', () => {
  let component: DynamicRowComponent;
  let fixture: ComponentFixture<DynamicRowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DynamicRowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DynamicRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
