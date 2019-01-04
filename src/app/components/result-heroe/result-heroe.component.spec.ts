import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultHeroeComponent } from './result-heroe.component';

describe('ResultHeroeComponent', () => {
  let component: ResultHeroeComponent;
  let fixture: ComponentFixture<ResultHeroeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResultHeroeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResultHeroeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
