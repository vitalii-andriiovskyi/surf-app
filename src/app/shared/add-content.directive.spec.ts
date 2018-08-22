import { Component, DebugElement } from '@angular/core';
import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { Subject } from 'rxjs';

import { AddContentDirective } from './add-content.directive';

// describe('AddContentDirective', () => {
//   it('should create an instance', () => {
//     const directive = new AddContentDirective();
//     expect(directive).toBeTruthy();
//   });
// });



@Component({
  template: `
    <div class="wrapper" [surfAddContent]="postBody">
    </div>
  `
})
class TestComponent {
  postBody = `<p>Hello!</p> <p>What's up</p>`;
}


describe('AddContentDirective', () => {

  let comp: TestComponent;
  let fixture: ComponentFixture<TestComponent>;
  let de: DebugElement;
  let el: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        TestComponent,
        AddContentDirective
      ]
    })
    .compileComponents();

  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent);

    comp = fixture.componentInstance;

    de = fixture.debugElement.query(By.css('.wrapper'));
    el = de.nativeElement;

  });

  it('should not be any children in the div.wrapper before getting data"> ', () => {
    // fixture.detectChanges();
    expect(el.children.length).toBe(0);
  });

  it('should be .innerDivArticle in the div.wrapper"> ', () => {
    fixture.detectChanges();
    expect(el.querySelector('div').className).toBe('innerDivArticle');
  });

});

