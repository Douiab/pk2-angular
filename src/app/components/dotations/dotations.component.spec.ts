/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { DotationsComponent } from './dotations.component';

describe('DotationsComponent', () => {
  let component: DotationsComponent;
  let fixture: ComponentFixture<DotationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DotationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DotationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
