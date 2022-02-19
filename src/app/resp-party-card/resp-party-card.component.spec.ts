import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RespPartyCardComponent } from './resp-party-card.component';

describe('RespPartyCardComponent', () => {
  let component: RespPartyCardComponent;
  let fixture: ComponentFixture<RespPartyCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RespPartyCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RespPartyCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
