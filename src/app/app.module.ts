import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms';
import { HeroDetailComponent } from './hero-detail.component';
import { HeroesComponent } from './heroes.component';
import {HeroService} from './hero.service';
import { RouterModule } from '@angular/router';
import {DashboardComponent} from './dashboard.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpModule } from '@angular/http';


@NgModule({
    declarations: [
        AppComponent, HeroDetailComponent, HeroesComponent, DashboardComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        AppRoutingModule,
    ],
    providers: [HeroService],
    bootstrap: [AppComponent]
})
export class AppModule { }
