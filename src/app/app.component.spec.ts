import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { TopMenuModule } from './top-menu/top-menu.module';
import { SurfFooterModule } from './surf-footer/surf-footer.module';


import { MenuStubService } from '../testing/menu-stub.service';
import { MenuService } from './core/menu.service';
import { ResizeService } from './core/resize.service';
import { WINDOW } from './core/window-ref.service';
import { WINDOW_PROVIDERS, browserWindowProvider, windowProvider } from './core/window-ref.service';
import { ScrollToTopComponent } from './core/scroll-to-top/scroll-to-top.component';
import { PassScrollingDataService } from './core/pass-scrolling-data.service';
import { AnimationFrameService } from './core/services/animation-frame.service';


describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        TopMenuModule,
        SurfFooterModule
      ],
      declarations: [
        AppComponent,
        ScrollToTopComponent
      ],
      providers: [
        PassScrollingDataService,
        AnimationFrameService,
        { provide: MenuService, useClass: MenuStubService },
        { provide: ResizeService, useClass: ResizeService},
        WINDOW_PROVIDERS
      ]
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

});
