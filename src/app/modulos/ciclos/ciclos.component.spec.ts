import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CiclosComponent } from './ciclos.component';

describe('CiclosComponent', () => {
  let component: CiclosComponent;
  let fixture: ComponentFixture<CiclosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CiclosComponent]
    });
    fixture = TestBed.createComponent(CiclosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
