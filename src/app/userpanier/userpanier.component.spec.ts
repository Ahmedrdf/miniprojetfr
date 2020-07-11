import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserpanierComponent } from './userpanier.component';

describe('UserpanierComponent', () => {
  let component: UserpanierComponent;
  let fixture: ComponentFixture<UserpanierComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserpanierComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserpanierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
