import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

import { Observable } from 'rxjs';
import { NavbarCollapseDirective } from '../shared/navbar-collapse.directive';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

// import { TopMenuModule } from './top-menu.module';
import { TopMenuComponent } from './top-menu.component';
import { MenuService } from '../core/menu.service';
import { MenuStubService } from '../../testing/menu-stub.service';
import { ActivatedRoute, ActivatedRouteStub, Router, RouterStub, RouterLinkStubDirective } from '../../testing/router-stubs';
import { MenuItem } from '../core/menu-item';

import { ResizeService } from '../core/resize.service';
import { WINDOW_PROVIDERS } from '../core/window-ref.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

let menuService: MenuStubService;
let activatedRoute: ActivatedRouteStub;

describe('TopMenuComponent', () => {
  beforeEach(() => {
    menuService = new MenuStubService();
    activatedRoute = new ActivatedRouteStub();
  });

  let component: TopMenuComponent;
  let fixture: ComponentFixture<TopMenuComponent>;

  let de: DebugElement;
  let menuA: HTMLElement;

  const menuItemFirst: MenuItem = {
    href: 'whoiswho',
    text: 'First Menu Item'
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ NgbModule, BrowserAnimationsModule ],
      // imports: [ TopMenuModule, RouterModule, CommonModule ],
      declarations: [ TopMenuComponent, NavbarCollapseDirective, RouterLinkStubDirective ],
      providers: [
        {provide: Router, useValue: RouterStub },
        {provide: MenuService, useValue: menuService },
        { provide: ActivatedRoute, useValue: activatedRoute },
        ResizeService,
        WINDOW_PROVIDERS
      ],
    })
    .compileComponents();
  }));

  beforeEach( () => {

    menuService.testMenuItems = [ menuItemFirst ];
    fixture = TestBed.createComponent(TopMenuComponent);
    component = fixture.componentInstance;

    fixture.detectChanges();
    de = fixture.debugElement.query(By.css('.nav-link'));
    menuA = de.nativeElement;

    /*const spy = spyOn(menuService, 'getMenuItems').and.returnValue(
      Observable.of([menuItemFirst])   );*/

    // fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show text of first A in main menu; Observable (done)', (done: any) => {
    fixture.detectChanges();

    // get the spy promise and wait for it to resolve
    /*spy.calls.mostRecent().returnValue.then(() => {
      fixture.detectChanges(); // update view with quote
      expect(el.textContent).toBe(testQuote);
      done();
    });*/
    expect(menuA.textContent).toBe(menuItemFirst.text);
    done();
  });
});
