import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KtabsetComponent } from './ktabset.component';

describe('KtabsetComponent', () => {
  let component: KtabsetComponent;
  let fixture: ComponentFixture<KtabsetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KtabsetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KtabsetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
