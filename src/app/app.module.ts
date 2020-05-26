import { BrowserModule, BrowserTransferStateModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { CoreModule } from './core/core.module';
import { TopMenuModule } from './top-menu/top-menu.module';
import { SurfHomeModule } from './surf-home/surf-home.module';
// import { FacebookModule } from 'ngx-facebook';
import { SurfFooterModule } from './surf-footer/surf-footer.module';
import { BlogModule } from './blog/blog.module';
import { HttpClientModule } from '@angular/common/http';

import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { RouterLinkStubDirective, RouterOutletStubComponent } from '../testing';



@NgModule({
  declarations: [
    AppComponent,
    RouterLinkStubDirective,
    RouterOutletStubComponent
  ],
  imports: [
    CoreModule.forRoot(),
    NgbModule,
    // FacebookModule.forRoot(),
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    HttpClientModule,
    ServiceWorkerModule.register('/ngsw-worker.js', {enabled: environment.production}),
    BrowserAnimationsModule,
    TopMenuModule,
    SurfHomeModule,
    SurfFooterModule,
    BlogModule,
    BrowserTransferStateModule,
    AppRoutingModule
  ],
  providers: [

  ],
  exports: [BrowserAnimationsModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
