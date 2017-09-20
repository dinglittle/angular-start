import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestNoneModeComponent } from './test-none-mode.component';

describe('TestNoneModeComponent', () => {
  let component: TestNoneModeComponent;
  let fixture: ComponentFixture<TestNoneModeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestNoneModeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestNoneModeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
