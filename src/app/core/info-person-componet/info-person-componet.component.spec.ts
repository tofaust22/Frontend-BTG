import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoPersonComponetComponent } from './info-person-componet.component';

describe('InfoPersonComponetComponent', () => {
  let component: InfoPersonComponetComponent;
  let fixture: ComponentFixture<InfoPersonComponetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InfoPersonComponetComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InfoPersonComponetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
