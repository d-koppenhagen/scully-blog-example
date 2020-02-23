import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SecureContentComponent } from './secure-content.component';

describe('SecureContentComponent', () => {
  let component: SecureContentComponent;
  let fixture: ComponentFixture<SecureContentComponent>;

  beforeEach(async(() => {
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
