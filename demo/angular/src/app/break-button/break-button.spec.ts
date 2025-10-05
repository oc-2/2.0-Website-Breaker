import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BreakButtonComponent } from './break-button.component';

describe('BreakButtonComponent', () => {
  let component: BreakButtonComponent;
  let fixture: ComponentFixture<BreakButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BreakButtonComponent] // standalone component
    }).compileComponents();

    fixture = TestBed.createComponent(BreakButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
