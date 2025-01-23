import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhatWeThinkComponent } from './what-we-think.component';

describe('WhatWeThinkComponent', () => {
  let component: WhatWeThinkComponent;
  let fixture: ComponentFixture<WhatWeThinkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WhatWeThinkComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WhatWeThinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
