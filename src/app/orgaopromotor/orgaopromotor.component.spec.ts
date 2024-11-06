import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrgaopromotorComponent } from './orgaopromotor.component';

describe('OrgaopromotorComponent', () => {
  let component: OrgaopromotorComponent;
  let fixture: ComponentFixture<OrgaopromotorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrgaopromotorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrgaopromotorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
