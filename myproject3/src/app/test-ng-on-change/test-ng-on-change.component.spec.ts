import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestNgOnChangeComponent } from './test-ng-on-change.component';

describe('TestNgOnChangeComponent', () => {
  let component: TestNgOnChangeComponent;
  let fixture: ComponentFixture<TestNgOnChangeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestNgOnChangeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestNgOnChangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
