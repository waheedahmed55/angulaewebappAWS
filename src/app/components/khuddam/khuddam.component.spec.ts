import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KhuddamComponent } from './khuddam.component';

describe('KhuddamComponent', () => {
  let component: KhuddamComponent;
  let fixture: ComponentFixture<KhuddamComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KhuddamComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KhuddamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
