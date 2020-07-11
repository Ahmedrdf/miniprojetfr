import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsSpectateurComponent } from './details-spectateur.component';

describe('DetailsSpectateurComponent', () => {
  let component: DetailsSpectateurComponent;
  let fixture: ComponentFixture<DetailsSpectateurComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailsSpectateurComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsSpectateurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
