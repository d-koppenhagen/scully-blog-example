import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { SecureContentComponent } from './secure-content.component';

describe('SecureContentComponent', () => {
  let component: SecureContentComponent;
  let fixture: ComponentFixture<SecureContentComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ SecureContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SecureContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
