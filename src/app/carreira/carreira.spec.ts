import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Carreira } from './carreira';

describe('Carreira', () => {
  let component: Carreira;
  let fixture: ComponentFixture<Carreira>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Carreira],
    }).compileComponents();

    fixture = TestBed.createComponent(Carreira);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
