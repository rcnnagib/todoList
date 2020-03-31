import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EstudosComponent } from './estudos.component';

describe('EstudosComponent', () => {
  let component: EstudosComponent;
  let fixture: ComponentFixture<EstudosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EstudosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EstudosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
