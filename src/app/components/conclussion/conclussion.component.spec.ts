import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConclussionComponent } from './conclussion.component';

describe('ConclussionComponent', () => {
  let component: ConclussionComponent;
  let fixture: ComponentFixture<ConclussionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConclussionComponent]
    });
    fixture = TestBed.createComponent(ConclussionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
