import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RatingsComponent } from './ratings.component';
import { faStar, faStarHalfStroke } from '@fortawesome/free-solid-svg-icons';
import { faStar as faStarEmpty } from '@fortawesome/free-regular-svg-icons';

fdescribe('RatingsComponent', () => {
  let component: RatingsComponent;
  let fixture: ComponentFixture<RatingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RatingsComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(RatingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should assign value 5 to score if passed value > 5', () => {
    component.score = 6;
    expect(component['_score']).toEqual(5);
  });

  it('should assign 5 solid starts if passed value is 5', () => {
    component.score = 5;
    expect(component.stars).toEqual([
      faStar,
      faStar,
      faStar,
      faStar,
      faStar
    ]);
  });

  it('should assign 5 empty starts if passed value is 0', () => {
    component.score = 0;
    expect(component.stars).toEqual([
      faStarEmpty,
      faStarEmpty,
      faStarEmpty,
      faStarEmpty,
      faStarEmpty
    ])
  });

  it('should assign 3 solid starts and 1 half stroke star if passed value is 3.5', () => {
    component.score = 3.5;
    expect(component.stars).toEqual([
      faStar,
      faStar,
      faStar,
      faStarHalfStroke,
      faStarEmpty
    ]);
  });

});

