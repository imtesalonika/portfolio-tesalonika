import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HalamanLoginComponent } from './halaman-login.component';

describe('HalamanLoginComponent', () => {
  let component: HalamanLoginComponent;
  let fixture: ComponentFixture<HalamanLoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HalamanLoginComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HalamanLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
