import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MyAppModule } from "./my-app/my-app.module";
import { ProductComponent } from './product/product.component';

@NgModule({
    declarations: [
        AppComponent,
        WelcomeComponent,
        HeaderComponent,
        FooterComponent,
        ProductComponent,
    ],
    providers: [],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        MyAppModule
    ]
})
export class AppModule { }
