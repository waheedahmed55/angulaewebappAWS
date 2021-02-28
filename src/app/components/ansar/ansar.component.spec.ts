import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnsarComponent } from './ansar.component';

describe('AnsarComponent', () => {
  let component: AnsarComponent;
  let fixture: ComponentFixture<AnsarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnsarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnsarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
