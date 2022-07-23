import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { CardContainerComponent } from './card-container.component';
import { ContentCardComponent } from '../content-card/content-card.component';
import { RouterModule } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';

describe('CardContainerComponent', () => {
  let component: CardContainerComponent;
  let fixture: ComponentFixture<CardContainerComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports:[RouterTestingModule.withRoutes([])],
      declarations: [ CardContainerComponent, ContentCardComponent ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
